#!/usr/bin/env node

import { Command } from 'commander';
import { registerCommands } from './commands/index.js';import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const program = new Command();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));
const { version } = packageJson;

program
  .name('linear')
  .description('CLI tool for interacting with Linear')
  .version(version);

registerCommands(program);

program.parse(process.argv);
