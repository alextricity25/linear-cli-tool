# Linear CLI

A command-line interface for interacting with [Linear](https://linear.app) using their TypeScript SDK.

Work in progress

## Features

- List, create, and modify Linear issues
- Configure API key
- Filter issues by team, status, and assignee
- More features coming soon!

## Installation

### Using Homebrew (macOS)

```bash
brew install --build-from-source https://raw.githubusercontent.com/alextricity25/linear-cli-tool/main/Formula/linear-cli.rb
```


### Using yarn

```bash
yarn global add linear-cli-tool
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

# Get issues in JSON format
linear issues list --format json

# List completed issues from a specific team
linear issues list --team "Engineering" --status "Done" --limit 15

# List your assigned issues
linear issues list --assignee "me" --status "Todo"
```

### Configuration

```bash
# Set API key
linear config set-api-key YOUR_API_KEY

# Get currently configured API key
linear config get-api-key

# Clear API key
linear config clear-api-key

# Get configuration in JSON format
linear config get-api-key --format json
```

### Output Formatting

The CLI supports different output formats:

```bash
# Default text output
linear issues list

# JSON output for programmatic use
linear issues list --format json
linear config get-api-key --format json
```

### Practical Examples

```bash
# Quick workflow: List your in-progress issues
linear issues list --assignee "me" --status "In Progress"

# Export team's completed issues from last sprint to JSON
linear issues list --team "Product" --status "Done" --format json > completed_issues.json

# Check if your API key is configured
linear config get-api-key
```

## Development

```bash
# Clone the repository
git clone https://github.com/alextricity25/linear-cli-tool.git
cd linear-cli-tool

# Enable corepack (if not already enabled)
corepack enable

# Install dependencies
yarn install

# Build the project
yarn build

# Watch for changes during development
yarn dev

# Run linting
yarn lint

# Run tests
yarn test
```

## Contributing

### Prerequisites

- Node.js 18 or later
- Yarn (via corepack, which is included with Node.js)

### Setup Development Environment

1. Enable corepack:
   ```bash
   corepack enable
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file with your Linear API key for testing (optional):
   ```
   LINEAR_API_KEY=your_api_key_here
   ```

4. Build and run the CLI locally:
   ```bash
   yarn build
   # Run the local build
   node dist/index.js
   ```

## License

MIT
