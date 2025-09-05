# Starter Packs

Pre-configured bundles of modes, workflows, and agents for specific development domains.

## Categories

- [Frontend](frontend/) - Frontend development setups and configurations
- [Backend](backend/) - Backend and API development environments
- [DevOps](devops/) - Infrastructure, deployment, and operations setups
- [AI/ML](ai-ml/) - AI, machine learning, and data science environments

## About Starter Packs

Starter packs are curated collections of components that work well together for specific types of development. They provide a quick way to set up a complete zcc environment for a particular domain.

### Usage

```bash
# Install a starter pack
zcc add pack community/pack-name

# This installs multiple components at once:
# - Relevant modes for the domain
# - Common workflows and procedures  
# - Specialized agents and tools
```

### Example Usage

```bash
# Install a frontend development pack
zcc add pack frontend-react

# This automatically installs:
# - Frontend developer mode
# - React specialist agent  
# - Code review workflows
# - Testing workflows
# - Performance optimization guides

# Install a DevOps starter pack
zcc add pack devops-kubernetes

# This provides:
# - DevOps engineer mode
# - Kubernetes specialist agent
# - Docker integration agent
# - Deployment workflows
# - Monitoring and troubleshooting guides
```

### Best Practices

- **Choose packs that match your project** - frontend, backend, full-stack, etc.
- **Start with packs, then customize** - add individual components as needed
- **Update packs regularly** - they evolve with new best practices
- **Mix and match** - you can install multiple packs and combine components
- **Create custom packs** for your organization's specific needs

### Contributing

See the main [Contributing Guidelines](../CONTRIBUTING.md) for information on creating new starter packs.