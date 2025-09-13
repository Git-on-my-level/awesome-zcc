# Awesome zcc

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/zcc-community/awesome-zcc/releases)
[![Components](https://img.shields.io/badge/components-5+-green.svg)](#contents)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

A curated list of awesome modes, workflows, agents, and starter packs for [zcc](https://github.com/dazheng/zcc) - the zsh for Claude Code.

## What is zcc?

zcc is to Claude Code what zsh is to bash. It enhances, customizes, and empowers Claude Code through packs (containing modes, agents, and workflows), configuration, and automation. Think of it as building oh-my-zsh for AI development.

## Contents

- [Quick Start](#quick-start) - Get started with awesome-zcc packs
- [Available Packs](#available-packs) - Domain-specific component packages
- [Contributing](#contributing) - Add your own packs and components

## Quick Start

### Browsing Components

Explore available components in several ways:

1. **Browse by Category**: Navigate the repository directories:
   - `/packs/` - Self-contained packages with modes, workflows, and agents organized by domain

2. **Explore Packs**: Browse the `/packs/` directory to find domain-specific packages with their manifest.json files.

3. **Filter by Tags**: Components are tagged for easy discovery:
   - `react`, `frontend`, `backend`, `debugging`, `security`, `performance`, etc.

### Using Packs with zcc

Once you have [zcc](https://github.com/dazheng/zcc) installed, you can install packs from this repository:

```bash
# Install a complete pack
zcc add pack frontend-react --source awesome-zcc

# Install multiple packs
zcc add pack full-stack code-quality --source awesome-zcc

# List available packs
zcc list packs --source awesome-zcc

```

### Submitting New Components

Ready to contribute? Here's how to add your own component:

1. **Fork this repository**
2. **Choose the right category**:
   - `packs/frontend-react/` - React development with specialist agents
   - `packs/full-stack/` - Complete full-stack development modes
   - `packs/code-quality/` - Code review and quality workflows
   - `packs/debugging/` - Systematic debugging approaches
   - `packs/essentials/` - Core development and writing modes

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

4. **Validate your pack** by ensuring:
   - manifest.json is valid JSON
   - All referenced components exist in the pack
   - Components have proper YAML frontmatter

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

## Available Packs

### frontend-react
Complete React frontend development pack with modern patterns and performance optimization.
- **Components**: React specialist agent
- **Focus**: React patterns, hooks, TypeScript, performance
- **Install**: `zcc add pack frontend-react --source awesome-zcc`

### full-stack
Comprehensive full-stack development with frontend, backend, and DevOps expertise.
- **Components**: Full-stack developer mode
- **Focus**: End-to-end development, architecture, deployment
- **Install**: `zcc add pack full-stack --source awesome-zcc`

### code-quality
Professional code review and quality assurance workflows.
- **Components**: Comprehensive PR review workflow
- **Focus**: Security, performance, maintainability analysis
- **Install**: `zcc add pack code-quality --source awesome-zcc`

### debugging
Systematic debugging and troubleshooting approaches.
- **Components**: Systematic debugging workflow
- **Focus**: Root cause analysis, problem-solving methodologies
- **Install**: `zcc add pack debugging --source awesome-zcc`

### essentials
Core development and documentation modes for everyday tasks.
- **Components**: Technical writer mode
- **Focus**: Documentation, technical communication
- **Install**: `zcc add pack essentials --source awesome-zcc`

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