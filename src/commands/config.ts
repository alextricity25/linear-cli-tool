import { Command } from 'commander';
import { setApiKey, getApiKey, clearApiKey } from '../utils/linear.js';
import { formatOutput, outputStatusMessage } from '../utils/output.js';
import { ConfigOutput } from '../types/output.js';

export function registerConfigCommands(program: Command): void {
  const configCommand = program.command('config');

  configCommand
    .command('set-api-key <key>')
    .description('Set your Linear API key')
    .action((key) => {
      setApiKey(key);
      const format = program.opts().format;
      outputStatusMessage('API key saved successfully', true, format);
    });

  configCommand
    .command('get-api-key')
    .description('Get your saved Linear API key')
    .action(() => {
      const apiKey = getApiKey();
      const format = program.opts().format;
      
      if (apiKey) {
        formatOutput<ConfigOutput>(
          { success: true, apiKey },
          format,
          (data) => {
            console.log(`API Key: ${data.apiKey}`);
          }
        );
      } else {
        outputStatusMessage('No API key found', false, format);
      }
    });

  configCommand
    .command('clear-api-key')
    .description('Clear your saved Linear API key')
    .action(() => {
      clearApiKey();
      const format = program.opts().format;
      outputStatusMessage('API key cleared successfully', true, format);
    });
}
