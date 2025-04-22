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
brew tap YOUR_USERNAME/linear-cli-tool
brew install linear-cli-tool
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
