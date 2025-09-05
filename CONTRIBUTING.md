# Contributing to Awesome zcc

Thank you for your interest in contributing to the awesome-zcc community repository! This document provides guidelines for contributing high-quality components to the zcc ecosystem.

## Types of Contributions

We welcome the following types of contributions:

- **Modes**: AI personalities for specific development tasks
- **Workflows**: Reusable procedures and patterns
- **Agents**: Claude Code subagents with specialized capabilities
- **Starter Packs**: Pre-configured component bundles

## Component Requirements

### Essential Requirements

1. **Proper Documentation**
   - Clear description of what the component does
   - Usage examples with expected outcomes
   - Prerequisites and dependencies
   - Installation and setup instructions

2. **Metadata Frontmatter**
   ```yaml
   ---
   name: component-name
   description: Brief description of functionality
   author: your-github-username
   version: 1.0.0
   tags: [relevant, tags]
   repository: https://github.com/username/repo-name
   license: MIT
   tested-with: ["zcc@1.0.0"]
   ---
   ```

3. **Quality Standards**
   - Component works as documented
   - Code follows best practices
   - No security vulnerabilities
   - Maintenance commitment from author

### Recommended Practices

- Include troubleshooting section
- Provide configuration examples
- Add screenshots or demos where helpful
- Link to related components or resources
- Follow existing naming conventions

## Submission Process

### Step 1: Prepare Your Component

1. Create your component following the established format
2. Test thoroughly with the latest zcc version
3. Write comprehensive documentation
4. Add proper metadata frontmatter

### Step 2: Choose the Right Category

- **modes/development/**: Engineering, debugging, architecture
- **modes/writing/**: Technical writing, documentation
- **modes/research/**: Analysis, investigation, learning
- **modes/specialized/**: Domain-specific expertise
- **workflows/code-review/**: PR review, quality assessment
- **workflows/debugging/**: Systematic debugging approaches
- **workflows/deployment/**: Release and rollback procedures
- **workflows/testing/**: Test strategy and coverage
- **agents/language-specific/**: Python, JavaScript, Rust, etc.
- **agents/tools/**: Git, Docker, Kubernetes integration
- **agents/frameworks/**: React, Django, Spring Boot
- **starter-packs/**: Organized by development domain

### Step 3: Submit Your Contribution

1. **Fork** this repository
2. **Create** a new branch: `git checkout -b add-my-component`
3. **Add** your component to the appropriate directory
4. **Update** the main README.md to include your component
5. **Commit** with a descriptive message
6. **Submit** a pull request

### Step 4: Review Process

1. **Community Review**: Other contributors review for quality and usefulness
2. **Testing**: Maintainers verify component functionality
3. **Feedback**: Address any requested changes
4. **Approval**: Merge after maintainer approval

## Review Criteria

### For New Components

- [ ] Follows component format requirements
- [ ] Includes comprehensive documentation
- [ ] Has proper metadata frontmatter
- [ ] Works as documented
- [ ] Provides clear value to users
- [ ] Fits appropriate category

### For Updates

- [ ] Maintains backward compatibility
- [ ] Updates version number
- [ ] Documents changes in component
- [ ] Tests with current zcc version

## Style Guide

### File Naming

- Use kebab-case: `advanced-debugging.md`
- Be descriptive but concise
- Avoid version numbers in filenames

### Directory Structure

```
category/
├── subcategory/
│   ├── component-name.md
│   └── README.md
└── README.md
```

### Documentation Format

Use clear headings and structure:

```markdown
# Component Name

Brief description of what it does.

## Features

- Feature 1
- Feature 2

## Usage

Example usage instructions.

## Configuration

Configuration options and examples.

## Troubleshooting

Common issues and solutions.
```

## Community Guidelines

### Be Respectful

- Use inclusive language
- Provide constructive feedback
- Help newcomers learn
- Respect different approaches

### Maintain Quality

- Test before submitting
- Keep components updated
- Respond to user issues
- Document breaking changes

### Share Knowledge

- Explain your approach
- Link to learning resources
- Collaborate on improvements
- Help others understand

## Getting Help

- Open an issue for questions
- Join community discussions
- Check existing components for examples
- Review the main zcc documentation

## Recognition

Contributors will be:
- Listed as component authors
- Credited in release notes
- Highlighted in community showcases
- Invited to maintainer discussions (for regular contributors)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping to grow the zcc ecosystem!