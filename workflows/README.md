# Workflows

Reusable development procedures and patterns for common tasks.

## Categories

- [Code Review](code-review/) - PR review and code quality assessment workflows
- [Debugging](debugging/) - Systematic debugging and troubleshooting procedures
- [Deployment](deployment/) - Release, deployment, and rollback workflows  
- [Testing](testing/) - Test strategy, coverage, and quality assurance workflows

## About Workflows

Workflows are step-by-step procedures for common development tasks. They provide structure and consistency to complex processes, ensuring nothing important is missed.

### Usage

```bash
# Install a workflow
zcc add workflow community/workflow-name

# Reference in prompts or modes
# Workflows can be called upon when needed
```

### Example Usage

```bash
# Install and use a code review workflow
zcc add workflow comprehensive-pr-review

# In Claude Code, reference the workflow:
# "Please use the comprehensive-pr-review workflow to analyze this PR"

# Install debugging workflow for systematic troubleshooting
zcc add workflow systematic-debugging

# Reference when encountering issues:
# "Walk me through the systematic-debugging workflow for this error"
```

### Best Practices

- **Use workflows as templates** - adapt the steps to your specific situation
- **Combine with appropriate modes** - use code review workflows with reviewer modes
- **Follow steps in order** - workflows are designed with logical progression
- **Customize for your context** - modify workflows for your team's specific needs
- **Reference explicitly** - mention the workflow name when you want Claude Code to follow specific steps

### Contributing

See the main [Contributing Guidelines](../CONTRIBUTING.md) for information on adding new workflows to this collection.