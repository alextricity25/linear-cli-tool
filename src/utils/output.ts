import chalk from 'chalk';
import { FormatOption, BaseOutput } from '../types/output.js';

/**
 * Formats and outputs content based on the specified format
 * @param data The data to output
 * @param format The output format (text or json)
 * @param textFormatter Function to format the data as text
 */
export function formatOutput<T>(
  data: T,
  format: FormatOption = 'text',
  textFormatter: (data: T) => void
): void {
  if (format === 'json') {
    console.log(JSON.stringify(data, null, 2));
  } else {
    textFormatter(data);
  }
}

/**
 * Outputs a status message
 * @param message The message to output
 * @param success Whether the operation was successful
 * @param format The output format
 */
export function outputStatusMessage(
  message: string,
  success: boolean = true,
  format: FormatOption = 'text'
): void {
  const output: BaseOutput = {
    success,
    message
  };

  formatOutput(
    output,
    format,
    () => {
      if (success) {
        console.log(chalk.green(message));
      } else {
        console.log(chalk.red(message));
      }
    }
  );
}
