# Linear CLI

A command-line interface for interacting with [Linear](https://linear.app) using their TypeScript SDK.

## Features

- List, create, and modify Linear issues
- Configure API key
- Filter issues by team, status, and assignee
- More features coming soon!

## Installation

### Using Homebrew (macOS)

```bash
brew tap YOUR_USERNAME/linear-cli
brew install linear-cli
```

### Using npm

```bash
npm install -g linear-cli
```

## Setup

Before using the CLI, you need to set up your Linear API key:

1. Get your API key from Linear (Settings > API > Create Key)
2. Set your API key:

```bash
linear config set-api-key YOUR_API_KEY
```

## Usage

### List Issues

```bash
# List all issues (default limit: 10)
linear issues list

# List issues with filters
linear issues list --team TEAM --status "In Progress" --assignee "John Doe" --limit 20
```

### Configuration

```bash
# Set API key
linear config set-api-key YOUR_API_KEY

# Get currently configured API key
linear config get-api-key

# Clear API key
linear config clear-api-key
```

## Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/linear-cli-tool.git
cd linear-cli-tool

# Install dependencies
npm install

# Build the project
npm run build

# Watch for changes during development
npm run dev

# Run linting
npm run lint

# Run tests
npm run test
```

## License

MIT
