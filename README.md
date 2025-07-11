# Linear CLI

A command-line interface for interacting with [Linear](https://linear.app) using their TypeScript SDK.

Work in progress

## Features

- List, create, and modify Linear issues
- Configure API key
- Filter issues by team, status, and assignee
- More features coming soon!

## Installation


### Local Installation

```bash
# Clone the repository
git clone https://github.com/alextricity25/linear-cli-tool.git
cd linear-cli-tool

# Enable corepack
corepack enable

# Install dependencies
yarn install

# Build the package
yarn build

# Link the package for local development
yarn link
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

## Upcoming Features

### 🚀 Phase 1: Enhanced Issue Management
- [ ] **Create Issues**: Create new issues with title, description, labels, and assignee
- [ ] **Update Issues**: Edit existing issues (title, description, status, assignee)
- [ ] **Bulk Operations**: Mass update multiple issues at once
- [ ] **Advanced Filtering**: Filter by labels, priority, created date, due date
- [ ] **Issue Templates**: Create issues from predefined templates
- [ ] **Search Issues**: Full-text search across issue titles and descriptions
- [ ] **Issue Dependencies**: Manage issue relationships and dependencies

### 📊 Phase 2: Team & Project Management
- [ ] **Team Management**: List teams, add/remove team members
- [ ] **Project Operations**: Create, update, and archive projects
- [ ] **Cycle Management**: Create and manage development cycles/sprints
- [ ] **Milestone Tracking**: Create and track project milestones
- [ ] **Backlog Management**: Prioritize and organize backlog items
- [ ] **Workspace Overview**: Get organization-level insights and statistics

### 📈 Phase 3: Reporting & Analytics
- [ ] **Team Velocity**: Generate team velocity reports and charts
- [ ] **Burndown Charts**: Create sprint/cycle burndown visualizations
- [ ] **Completion Reports**: Track issue completion rates over time
- [ ] **Time Tracking**: Log time against issues and generate time reports
- [ ] **Custom Reports**: Generate custom reports with filters and grouping
- [ ] **Export Options**: Export reports to CSV, PDF, or other formats

### 🔧 Phase 4: Workflow Automation
- [ ] **Workflow States**: Create and manage custom workflow states
- [ ] **Automation Rules**: Set up rules for automatic issue state transitions
- [ ] **Label Management**: Create, update, and organize labels
- [ ] **Notification Setup**: Configure custom notifications and alerts
- [ ] **Integration Management**: Set up and manage GitHub/GitLab integrations
- [ ] **Webhook Configuration**: Create and manage webhook endpoints

### 🎯 Phase 5: Advanced Features
- [ ] **Custom Views**: Create and share filtered views of issues
- [ ] **Keyboard Shortcuts**: Interactive mode with keyboard shortcuts
- [ ] **Batch Import**: Import issues from CSV or other project management tools
- [ ] **API Key Management**: Manage and rotate multiple API keys
- [ ] **Plugin System**: Extensible plugin architecture for custom commands
- [ ] **Real-time Updates**: Live updates for issue changes and notifications

### 🔗 Developer Workflow Integration
- [ ] **Git Integration**: Create issues from commit messages or branch names
- [ ] **PR Linking**: Automatically link pull requests to Linear issues
- [ ] **Branch Creation**: Create Git branches from Linear issues
- [ ] **Status Sync**: Update issue status based on Git workflow events
- [ ] **Code Review Integration**: Create issues from code review comments

### 💡 Quality of Life Improvements
- [ ] **Interactive Mode**: REPL-style interactive command mode
- [ ] **Configuration Profiles**: Support multiple Linear workspaces/profiles
- [ ] **Fuzzy Search**: Smart search with typo tolerance
- [ ] **Auto-completion**: Shell completion for commands and options
- [ ] **Offline Mode**: Cache frequently used data for offline access
- [ ] **Progress Indicators**: Better progress bars and status updates

---

**Want to contribute?** Pick any unchecked feature above and submit a pull request! See the [Contributing](#contributing) section for development setup instructions.

## License

MIT
