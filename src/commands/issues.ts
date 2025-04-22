import { Command } from 'commander';
import { listIssues } from '../utils/issues.js';

export function registerIssueCommands(program: Command): void {
  const issueCommand = program.command('issues');

  issueCommand
    .command('list')
    .description('List issues from Linear')
    .option('-t, --team <team>', 'Filter by team key')
    .option('-s, --status <status>', 'Filter by status')
    .option('-a, --assignee <assignee>', 'Filter by assignee')
    .option('-l, --limit <limit>', 'Limit the number of issues', '10')
    .action(async (options) => {
      await listIssues(options);
    });

  // Add more issue-related commands here
}
