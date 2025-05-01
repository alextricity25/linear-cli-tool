import { Command } from 'commander';
import { commentOnIssue, listIssues } from '../utils/issues.js';

export function registerIssueCommands(program: Command): void {
  const issueCommand = program.command('issues');

  issueCommand
    .command('list')
    .configureHelp({
      showGlobalOptions: true,
    })
    .description('List issues from Linear')
    .option('-t, --team <team>', 'Filter by team key')
    .option('-s, --status <status>', 'Filter by status')
    .option('-a, --assignee <assignee>', 'Filter by assignee')
    .option('-l, --limit <limit>', 'Limit the number of issues', '10')
    .action(async (options) => {
      // Get global format option if available
      const format = program.opts().format;
      await listIssues({ ...options, format });
    });

  // Add more issue-related commands here
  issueCommand
    .command('comment')
    .configureHelp({
      showGlobalOptions: true,
    })
    .description('Add a comment to an issue')
    .option('-i, --issue <issue>', 'Issue identifier')
    .option('-c, --comment <comment>', 'Comment text')
    .action(async (options) => {
      const format = program.opts().format;
      await commentOnIssue(options.issue, options.comment, format);
    });
}
