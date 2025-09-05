# Awesome zcc

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/zcc-community/awesome-zcc/releases)
[![Components](https://img.shields.io/badge/components-5+-green.svg)](#contents)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

A curated list of awesome modes, workflows, agents, and starter packs for [zcc](https://github.com/dazheng/zcc) - the zsh for Claude Code.

## What is zcc?

zcc is to Claude Code what zsh is to bash. It enhances, customizes, and empowers Claude Code through themes (modes), plugins (agents/workflows), configuration, and automation. Think of it as building oh-my-zsh for AI development.

## Contents

- [Quick Start](#quick-start) - Get started with awesome-zcc components
- [Modes](#modes) - AI personalities for different development tasks
- [Workflows](#workflows) - Reusable development procedures and patterns  
- [Agents](#agents) - Claude Code subagents for specialized tasks
- [Starter Packs](#starter-packs) - Pre-configured component bundles

## Quick Start

### Browsing Components

Explore available components in several ways:

1. **Browse by Category**: Navigate the repository directories:
   - `/modes/` - AI personalities for different development tasks
   - `/workflows/` - Reusable development procedures
   - `/agents/` - Specialized Claude Code subagents
   - `/starter-packs/` - Pre-configured component bundles

2. **Search the Registry**: Check [`components.json`](components.json) for a complete list of all available components with metadata.

3. **Filter by Tags**: Components are tagged for easy discovery:
   - `react`, `frontend`, `backend`, `debugging`, `security`, `performance`, etc.

### Using Components with zcc

Once you have [zcc](https://github.com/dazheng/zcc) installed, you can use these community components:

```bash
# Install a mode
zcc add mode full-stack-developer

# Install a workflow  
zcc add workflow comprehensive-pr-review

# Install an agent
zcc add agent react-specialist

# Install a starter pack (installs multiple components)
zcc add starter-pack frontend-react
```

### Submitting New Components

Ready to contribute? Here's how to add your own component:

1. **Fork this repository**
2. **Choose the right category**:
   - `modes/development/` - Engineering, debugging, architecture
   - `modes/writing/` - Technical writing, documentation  
   - `modes/research/` - Analysis, investigation, learning
   - `modes/specialized/` - Domain-specific expertise
   - `workflows/code-review/` - PR review, quality assessment
   - `workflows/debugging/` - Systematic debugging approaches
   - `workflows/deployment/` - Release and rollback procedures
   - `workflows/testing/` - Test strategy and coverage
   - `agents/language-specific/` - Python, JavaScript, Rust, etc.
   - `agents/tools/` - Git, Docker, Kubernetes integration
   - `agents/frameworks/` - React, Django, Spring Boot

3. **Create your component file** with proper YAML frontmatter:
   ```yaml
   ---
   name: your-component-name
   description: What this component does
   author: your-github-username
   version: 1.0.0
   tags: [relevant, tags]
   repository: https://github.com/username/repo
   license: MIT
   tested-with: ["zcc@1.0.0"]
   ---
   ```

4. **Test your component** using the validation script:
   ```bash
   npm install  # Install dependencies
   node scripts/validate.js  # Validate repository
   ```

5. **Submit a pull request** with:
   - Your new component file
   - Updated main README.md section
   - Clear description of what your component does

### Quality Assurance

All components go through:
- ✅ **Automated validation** - YAML frontmatter, file structure, references
- ✅ **Community review** - Functionality, usefulness, documentation quality  
- ✅ **Testing** - Verification that components work as documented
- ✅ **Maintenance commitment** - Ongoing support from component authors

### Getting Help

- 📖 Read our [Contributing Guidelines](CONTRIBUTING.md) for detailed instructions
- 🐛 [Open an issue](https://github.com/zcc-community/awesome-zcc/issues) for questions or problems
- 💬 Join community discussions in GitHub Issues
- 📚 Check the main [zcc documentation](https://github.com/dazheng/zcc) for CLI usage

## Modes

AI personalities that transform Claude Code's behavior for specific tasks.

### Development
<!-- Add development-focused modes here -->

### Writing  
<!-- Add writing and documentation modes here -->

### Research
<!-- Add research and analysis modes here -->

### Specialized
<!-- Add domain-specific modes here -->

## Workflows

Reusable procedures and patterns for common development tasks.

### Code Review
<!-- Add code review workflows here -->

### Debugging
<!-- Add debugging procedures here -->

### Deployment  
<!-- Add deployment workflows here -->

### Testing
<!-- Add testing workflows here -->

## Agents

Claude Code subagents for specialized capabilities.

### Language-Specific
<!-- Add language-specific agents here -->

### Tools
<!-- Add tool integration agents here -->

### Frameworks
<!-- Add framework-specific agents here -->

## Starter Packs

Pre-configured bundles of modes, workflows, and agents for specific use cases.

### Frontend
<!-- Add frontend development packs here -->

### Backend
<!-- Add backend development packs here -->

### DevOps
<!-- Add DevOps and infrastructure packs here -->

### AI/ML
<!-- Add AI/ML development packs here -->

## Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting.

### Quick Start for Contributors

1. Fork this repository
2. Create a new branch for your contribution
3. Add your component following the established format
4. Include proper documentation and examples
5. Submit a pull request

## Component Format

All components should include YAML frontmatter with metadata:

```yaml
---
name: component-name
description: What this component does
author: your-github-username
version: 1.0.0
tags: [tag1, tag2]
repository: https://github.com/username/repo
license: MIT
tested-with: ["zcc@1.0.0"]
---
```

## Quality Standards

- Clear documentation with usage examples
- Proper metadata in frontmatter
- Active maintenance commitment
- Community review and testing

## License

This repository is licensed under the [MIT License](LICENSE).

## Related

- [zcc](https://github.com/dazheng/zcc) - The main zcc project
- [Claude Code](https://claude.ai/code) - Anthropic's official CLI for Claude

---

*Inspired by the awesome lists movement and oh-my-zsh community.*