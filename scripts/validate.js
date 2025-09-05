#!/usr/bin/env node

/**
 * Awesome-zcc Repository Validation Script
 * 
 * This script validates the integrity of the awesome-zcc community repository:
 * - Checks YAML frontmatter in all component files
 * - Validates components.json registry accuracy
 * - Ensures starter pack references are valid
 * - Checks for broken links and missing files
 * - Validates directory structure consistency
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

class ValidationError extends Error {
  constructor(message, file, line) {
    super(message);
    this.file = file;
    this.line = line;
  }
}

class RepositoryValidator {
  constructor(repoPath) {
    this.repoPath = repoPath;
    this.errors = [];
    this.warnings = [];
    this.stats = {
      totalComponents: 0,
      validComponents: 0,
      totalStarterPacks: 0,
      validStarterPacks: 0
    };
  }

  // Main validation entry point
  async validate() {
    console.log('🔍 Validating awesome-zcc repository...\n');
    
    try {
      await this.validateDirectoryStructure();
      await this.validateComponents();
      await this.validateComponentsRegistry();
      await this.validateStarterPacks();
      await this.validateDocumentation();
      
      this.printResults();
      
      return {
        success: this.errors.length === 0,
        errors: this.errors,
        warnings: this.warnings,
        stats: this.stats
      };
    } catch (error) {
      console.error('❌ Validation failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  // Validate expected directory structure
  async validateDirectoryStructure() {
    console.log('📁 Validating directory structure...');
    
    const expectedDirs = [
      'modes/development',
      'modes/writing', 
      'modes/research',
      'modes/specialized',
      'workflows/code-review',
      'workflows/debugging',
      'workflows/testing',
      'workflows/deployment',
      'agents/language-specific',
      'agents/tools',
      'agents/frameworks',
      'starter-packs/frontend',
      'starter-packs/backend',
      'starter-packs/devops',
      'starter-packs/ai-ml',
      '.github'
    ];

    const expectedFiles = [
      'README.md',
      'CONTRIBUTING.md',
      'LICENSE',
      'components.json',
      'package.json',
      '.gitignore'
    ];

    for (const dir of expectedDirs) {
      const fullPath = path.join(this.repoPath, dir);
      if (!fs.existsSync(fullPath)) {
        this.errors.push(new ValidationError(
          `Missing expected directory: ${dir}`,
          dir
        ));
      }
    }

    for (const file of expectedFiles) {
      const fullPath = path.join(this.repoPath, file);
      if (!fs.existsSync(fullPath)) {
        this.errors.push(new ValidationError(
          `Missing expected file: ${file}`,
          file
        ));
      }
    }
  }

  // Validate all component files
  async validateComponents() {
    console.log('📋 Validating component files...');
    
    const componentDirs = ['modes', 'workflows', 'agents'];
    
    for (const dir of componentDirs) {
      await this.validateComponentsInDirectory(path.join(this.repoPath, dir));
    }
  }

  async validateComponentsInDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        await this.validateComponentsInDirectory(fullPath);
      } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
        await this.validateComponentFile(fullPath);
      }
    }
  }

  async validateComponentFile(filePath) {
    this.stats.totalComponents++;
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(this.repoPath, filePath);
      
      // Check for YAML frontmatter
      if (!content.startsWith('---\n')) {
        this.errors.push(new ValidationError(
          'Component file missing YAML frontmatter',
          relativePath
        ));
        return;
      }

      // Extract and parse frontmatter
      const frontmatterEnd = content.indexOf('\n---\n', 4);
      if (frontmatterEnd === -1) {
        this.errors.push(new ValidationError(
          'Component file has malformed YAML frontmatter (missing closing ---)',
          relativePath
        ));
        return;
      }

      const frontmatterContent = content.slice(4, frontmatterEnd);
      let frontmatter;
      
      try {
        frontmatter = yaml.load(frontmatterContent);
      } catch (yamlError) {
        this.errors.push(new ValidationError(
          `Invalid YAML frontmatter: ${yamlError.message}`,
          relativePath,
          yamlError.mark?.line
        ));
        return;
      }

      // Validate required frontmatter fields
      const requiredFields = ['name', 'description', 'author', 'version', 'tags'];
      for (const field of requiredFields) {
        if (!frontmatter[field]) {
          this.errors.push(new ValidationError(
            `Missing required frontmatter field: ${field}`,
            relativePath
          ));
        }
      }

      // Validate field types and formats
      if (frontmatter.tags && !Array.isArray(frontmatter.tags)) {
        this.errors.push(new ValidationError(
          'Frontmatter field "tags" must be an array',
          relativePath
        ));
      }

      if (frontmatter.version && !/^\d+\.\d+\.\d+$/.test(frontmatter.version)) {
        this.warnings.push(new ValidationError(
          'Version should follow semantic versioning (x.y.z)',
          relativePath
        ));
      }

      // Check for minimum content length
      const bodyContent = content.slice(frontmatterEnd + 5);
      if (bodyContent.trim().length < 100) {
        this.warnings.push(new ValidationError(
          'Component content seems very short (< 100 characters)',
          relativePath
        ));
      }

      this.stats.validComponents++;
      
    } catch (error) {
      this.errors.push(new ValidationError(
        `Failed to read component file: ${error.message}`,
        path.relative(this.repoPath, filePath)
      ));
    }
  }

  // Validate components.json registry
  async validateComponentsRegistry() {
    console.log('📊 Validating components.json registry...');
    
    const registryPath = path.join(this.repoPath, 'components.json');
    
    if (!fs.existsSync(registryPath)) {
      this.errors.push(new ValidationError(
        'components.json registry file not found',
        'components.json'
      ));
      return;
    }

    try {
      const registryContent = fs.readFileSync(registryPath, 'utf8');
      const registry = JSON.parse(registryContent);

      // Validate registry structure
      const requiredSections = ['modes', 'workflows', 'agents', 'starter-packs'];
      for (const section of requiredSections) {
        if (!registry.components || !registry.components[section]) {
          this.errors.push(new ValidationError(
            `Missing section in components.json: components.${section}`,
            'components.json'
          ));
        }
      }

      // Validate each component reference
      for (const [section, components] of Object.entries(registry.components || {})) {
        for (const component of components || []) {
          await this.validateRegistryComponent(component, section);
        }
      }

      // Validate statistics
      if (registry.statistics) {
        const actualTotal = Object.values(registry.components || {})
          .reduce((sum, arr) => sum + (arr?.length || 0), 0);
        
        if (registry.statistics.totalComponents !== actualTotal) {
          this.warnings.push(new ValidationError(
            `Statistics mismatch: totalComponents is ${registry.statistics.totalComponents}, but found ${actualTotal} components`,
            'components.json'
          ));
        }
      }

    } catch (error) {
      this.errors.push(new ValidationError(
        `Failed to parse components.json: ${error.message}`,
        'components.json'
      ));
    }
  }

  async validateRegistryComponent(component, section) {
    const requiredFields = ['name', 'path', 'description', 'author', 'version'];
    
    for (const field of requiredFields) {
      if (!component[field]) {
        this.errors.push(new ValidationError(
          `Component "${component.name || 'unnamed'}" missing required field: ${field}`,
          'components.json'
        ));
      }
    }

    // Check if component file exists
    if (component.path) {
      const componentPath = path.join(this.repoPath, component.path);
      if (!fs.existsSync(componentPath)) {
        this.errors.push(new ValidationError(
          `Component file not found: ${component.path}`,
          'components.json'
        ));
      } else {
        // Cross-reference with actual file frontmatter
        await this.crossReferenceComponent(componentPath, component);
      }
    }
  }

  async crossReferenceComponent(filePath, registryEntry) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const frontmatterEnd = content.indexOf('\n---\n', 4);
      
      if (frontmatterEnd !== -1) {
        const frontmatterContent = content.slice(4, frontmatterEnd);
        const frontmatter = yaml.load(frontmatterContent);
        
        // Check for mismatches
        if (frontmatter.name !== registryEntry.name) {
          this.errors.push(new ValidationError(
            `Name mismatch: file has "${frontmatter.name}", registry has "${registryEntry.name}"`,
            path.relative(this.repoPath, filePath)
          ));
        }
        
        if (frontmatter.version !== registryEntry.version) {
          this.warnings.push(new ValidationError(
            `Version mismatch: file has "${frontmatter.version}", registry has "${registryEntry.version}"`,
            path.relative(this.repoPath, filePath)
          ));
        }
      }
    } catch (error) {
      // Error already caught by validateComponentFile
    }
  }

  // Validate starter packs
  async validateStarterPacks() {
    console.log('📦 Validating starter packs...');
    
    const starterPacksDir = path.join(this.repoPath, 'starter-packs');
    
    if (!fs.existsSync(starterPacksDir)) {
      this.errors.push(new ValidationError(
        'starter-packs directory not found',
        'starter-packs'
      ));
      return;
    }

    await this.validateStarterPacksInDirectory(starterPacksDir);
  }

  async validateStarterPacksInDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        await this.validateStarterPacksInDirectory(fullPath);
      } else if (entry.name.endsWith('.json')) {
        await this.validateStarterPack(fullPath);
      }
    }
  }

  async validateStarterPack(packPath) {
    this.stats.totalStarterPacks++;
    
    try {
      const content = fs.readFileSync(packPath, 'utf8');
      const pack = JSON.parse(content);
      const relativePath = path.relative(this.repoPath, packPath);

      // Validate required fields
      const requiredFields = ['name', 'version', 'description', 'author', 'category', 'components'];
      for (const field of requiredFields) {
        if (!pack[field]) {
          this.errors.push(new ValidationError(
            `Starter pack missing required field: ${field}`,
            relativePath
          ));
        }
      }

      // Validate component references
      if (pack.components) {
        for (const [type, components] of Object.entries(pack.components)) {
          for (const component of components || []) {
            if (component.name) {
              await this.validateStarterPackComponentReference(
                component.name, 
                type,
                relativePath
              );
            }
          }
        }
      }

      this.stats.validStarterPacks++;
      
    } catch (error) {
      this.errors.push(new ValidationError(
        `Failed to parse starter pack: ${error.message}`,
        path.relative(this.repoPath, packPath)
      ));
    }
  }

  async validateStarterPackComponentReference(componentName, type, packPath) {
    // Check if the referenced component exists in the registry
    const registryPath = path.join(this.repoPath, 'components.json');
    
    if (fs.existsSync(registryPath)) {
      try {
        const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
        
        if (type === 'starter-packs') {
          // Skip validation for starter pack references to avoid circular dependencies
          return;
        }
        
        const section = registry.components?.[type];
        const found = section?.find(c => c.name === componentName);
        
        if (!found) {
          this.errors.push(new ValidationError(
            `Starter pack references non-existent component: ${componentName} (type: ${type})`,
            packPath
          ));
        }
      } catch (error) {
        // Registry validation will catch JSON parsing errors
      }
    }
  }

  // Validate documentation completeness
  async validateDocumentation() {
    console.log('📚 Validating documentation...');
    
    const docsToCheck = [
      { path: 'README.md', required: ['# Awesome zcc', '## Contents', '## Contributing'] },
      { path: 'CONTRIBUTING.md', required: ['# Contributing', '## Types of Contributions', '## Component Requirements'] }
    ];

    for (const doc of docsToCheck) {
      await this.validateDocumentationFile(doc);
    }

    // Check for README files in each category directory
    const categoryDirs = [
      'modes', 'workflows', 'agents', 'starter-packs',
      'modes/development', 'modes/writing', 'modes/research', 'modes/specialized',
      'workflows/code-review', 'workflows/debugging', 'workflows/testing', 'workflows/deployment',
      'agents/language-specific', 'agents/tools', 'agents/frameworks'
    ];

    for (const dir of categoryDirs) {
      const readmePath = path.join(this.repoPath, dir, 'README.md');
      if (!fs.existsSync(readmePath)) {
        this.warnings.push(new ValidationError(
          `Missing README.md in category directory: ${dir}`,
          `${dir}/README.md`
        ));
      }
    }
  }

  async validateDocumentationFile(doc) {
    const filePath = path.join(this.repoPath, doc.path);
    
    if (!fs.existsSync(filePath)) {
      this.errors.push(new ValidationError(
        `Missing documentation file: ${doc.path}`,
        doc.path
      ));
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    for (const requiredSection of doc.required) {
      if (!content.includes(requiredSection)) {
        this.warnings.push(new ValidationError(
          `Documentation file missing required section: ${requiredSection}`,
          doc.path
        ));
      }
    }
  }

  // Print validation results
  printResults() {
    console.log('\n📊 Validation Results:');
    console.log('====================');
    
    console.log(`\n✅ Components: ${this.stats.validComponents}/${this.stats.totalComponents}`);
    console.log(`✅ Starter Packs: ${this.stats.validStarterPacks}/${this.stats.totalStarterPacks}`);
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('\n🎉 All validations passed! Repository is ready for community use.');
      return;
    }

    if (this.errors.length > 0) {
      console.log(`\n❌ ${this.errors.length} Error(s):`);
      this.errors.forEach((error, index) => {
        console.log(`${index + 1}. ${error.message}`);
        if (error.file) console.log(`   File: ${error.file}`);
        if (error.line) console.log(`   Line: ${error.line}`);
      });
    }

    if (this.warnings.length > 0) {
      console.log(`\n⚠️  ${this.warnings.length} Warning(s):`);
      this.warnings.forEach((warning, index) => {
        console.log(`${index + 1}. ${warning.message}`);
        if (warning.file) console.log(`   File: ${warning.file}`);
      });
    }

    const status = this.errors.length === 0 ? '✅ Ready with warnings' : '❌ Needs fixes';
    console.log(`\n${status}`);
  }
}

// Check if we have js-yaml dependency
function checkDependencies() {
  try {
    require('js-yaml');
    return true;
  } catch (error) {
    console.error('❌ Missing dependency: js-yaml');
    console.log('Please install it with: npm install js-yaml');
    return false;
  }
}

// Main execution
async function main() {
  if (!checkDependencies()) {
    process.exit(1);
  }

  const repoPath = process.argv[2] || process.cwd();
  const validator = new RepositoryValidator(repoPath);
  
  const result = await validator.validate();
  
  process.exit(result.success ? 0 : 1);
}

if (require.main === module) {
  main().catch(error => {
    console.error('❌ Unexpected error:', error.message);
    process.exit(1);
  });
}

module.exports = { RepositoryValidator, ValidationError };