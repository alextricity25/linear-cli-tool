#!/usr/bin/env node

import { Command } from 'commander';
import { registerCommands } from './commands/index.js';
import { version } from '../package.json';

const program = new Command();

program
  .name('linear')
  .description('CLI tool for interacting with Linear')
  .version(version);

registerCommands(program);

program.parse(process.argv);
