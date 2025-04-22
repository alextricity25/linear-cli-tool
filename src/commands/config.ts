import { Command } from 'commander';
import { setApiKey, getApiKey, clearApiKey } from '../utils/linear.js';
import chalk from 'chalk';

export function registerConfigCommands(program: Command): void {
  const configCommand = program.command('config');

  configCommand
    .command('set-api-key <key>')
    .description('Set your Linear API key')
    .action((key) => {
      setApiKey(key);
      console.log(chalk.green('API key saved successfully'));
    });

  configCommand
    .command('get-api-key')
    .description('Get your saved Linear API key')
    .action(() => {
      const apiKey = getApiKey();
      if (apiKey) {
        console.log(`API Key: ${apiKey}`);
      } else {
        console.log(chalk.yellow('No API key found'));
      }
    });

  configCommand
    .command('clear-api-key')
    .description('Clear your saved Linear API key')
    .action(() => {
      clearApiKey();
      console.log(chalk.green('API key cleared successfully'));
    });
}
