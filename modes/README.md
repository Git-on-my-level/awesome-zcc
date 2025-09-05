# Modes

AI personalities that transform Claude Code's behavior for specific development tasks.

## Categories

- [Development](development/) - Engineering, debugging, and architecture roles
- [Writing](writing/) - Technical writing, documentation, and content creation  
- [Research](research/) - Analysis, investigation, and learning assistance
- [Specialized](specialized/) - Domain-specific expertise (security, performance, etc.)

## About Modes

Modes are like themes for Claude Code - they completely change the AI's personality and behavior to match specific development contexts. Think of them as specialized assistants for different types of work.

### Usage

```bash
# Install a mode
zcc add mode community/mode-name

# Switch to a mode  
/mode mode-name
```

### Example Usage

```bash
# Install and use a development mode
zcc add mode full-stack-developer
/mode full-stack-developer

# Now Claude Code will act as a full-stack developer
# with expertise in frontend, backend, and deployment

# Install a specialized mode
zcc add mode technical-writer  
/mode technical-writer

# Claude Code now focuses on documentation,
# clear explanations, and writing assistance
```

### Best Practices

- **Choose the right mode** for your current task type
- **Switch modes frequently** - use different personalities for different phases of work
- **Combine with workflows** - modes set the personality, workflows define the process
- **Test mode behavior** with a simple question after switching to verify the personality change

### Contributing

See the main [Contributing Guidelines](../CONTRIBUTING.md) for information on adding new modes to this collection.