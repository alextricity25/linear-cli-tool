import { Command } from 'commander';
import { registerIssueCommands } from './issues.js';
import { registerConfigCommands } from './config.js';

export function registerCommands(program: Command): void {
  registerIssueCommands(program);
  registerConfigCommands(program);
  // Add more command registrations here as you build them
}
