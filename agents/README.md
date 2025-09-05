# Agents

Claude Code subagents with specialized capabilities for specific tools and domains.

## Categories

- [Language-Specific](language-specific/) - Python, JavaScript, Rust, Go, and other language experts
- [Tools](tools/) - Git, Docker, Kubernetes, and development tool integration agents
- [Frameworks](frameworks/) - React, Django, Spring Boot, and framework-specific agents

## About Agents

Agents are Claude Code subagents that provide specialized functionality and deep expertise in specific areas. They extend Claude Code's capabilities with focused, domain-specific knowledge.

### Usage

```bash
# Install an agent
zcc add agent community/agent-name

# Agents are automatically available in Claude Code
# They provide specialized tools and knowledge
```

### Example Usage

```bash
# Install a language-specific agent
zcc add agent python-expert

# The agent automatically provides:
# - Python-specific debugging assistance
# - Library recommendations
# - Code optimization suggestions
# - Best practices guidance

# Install a tool integration agent
zcc add agent docker-specialist

# Now Claude Code can:
# - Generate Dockerfiles
# - Debug container issues
# - Optimize Docker builds
# - Provide deployment guidance
```

### Best Practices

- **Install relevant agents** for your project's tech stack
- **Combine agents with modes** - agents provide tools, modes provide personality
- **Use multiple agents** - different agents can work together seamlessly  
- **Keep agents updated** - newer versions often include improved capabilities
- **Choose specialized agents** over general ones for specific tasks

### Contributing

See the main [Contributing Guidelines](../CONTRIBUTING.md) for information on adding new agents to this collection.