# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `yarn build` (compiles TypeScript)
- Dev: `yarn dev` (watch mode)
- Test: `yarn test` (run all tests)
- Test single: `yarn test tests/file.test.ts` (run specific test)
- Lint: `yarn lint` (runs ESLint)

## Code Style Guidelines
- TypeScript: Strict typing with interfaces in src/types/
- Formatting: 2-space indentation, single quotes, Unix line endings
- Imports: ES modules with explicit named imports
- Commands: Located in src/commands/, registered in commands/index.ts
- Utilities: Reusable functions in src/utils/
- Error handling: Use try/catch with informative error messages
- Asynchronous code: Prefer async/await over Promises
- Testing: Vitest with describe/it blocks in tests/ directory
- Dependencies: @linear/sdk, commander, chalk, ora, conf, inquirer

## Architecture

### Core Components
- **Entry Point**: `src/index.ts` - Main CLI program setup with Commander.js
- **Command Registration**: `src/commands/index.ts` - Central command registry
- **Commands**: `src/commands/` - Individual command implementations
- **Utilities**: `src/utils/` - Shared functionality and Linear API interactions
- **Types**: `src/types/` - TypeScript interfaces and type definitions

### Key Files
- `src/utils/linear.ts` - Linear API client setup and authentication
- `src/utils/issues.ts` - Issue-related operations (list, comment)
- `src/utils/output.ts` - Output formatting utilities for text/JSON
- `src/types/output.ts` - Output type definitions

### Global Options
- `--format` option supports 'text' (default) and 'json' output formats
- Available on all commands via global program options

### Configuration
- Uses `conf` package for persistent configuration storage
- API key stored as 'apiKey' in project-specific config
- Configuration managed through `src/utils/linear.ts`

### Output Formatting
- Dual output format support (text/JSON) via `formatOutput` utility
- Text output uses chalk for colors and formatting
- JSON output structured with consistent interfaces
- Status messages handled via `outputStatusMessage` utility

### Command Structure
All commands follow the pattern:
1. Register with Commander.js in respective command files
2. Access global `--format` option via `program.opts().format`
3. Use shared utilities for Linear API interactions
4. Format output using utility functions

### Testing
- Uses Vitest for testing framework
- Mocks external dependencies (conf, Linear SDK)
- Tests located in `tests/` directory
- Configuration utilities fully unit tested