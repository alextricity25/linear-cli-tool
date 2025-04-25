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