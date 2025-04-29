import chalk from 'chalk';
import ora from 'ora';
import { getLinearClient } from './linear.js';
import { IssueFilter } from '@linear/sdk/dist/_generated_documents.js';
import { formatOutput } from './output.js';
import { IssueOutput, FormatOption } from '../types/output.js';

type ListIssuesOptions = {
  team?: string;
  status?: string;
  assignee?: string;
  limit?: string;
  format?: FormatOption;
};

export async function listIssues(options: ListIssuesOptions): Promise<void> {
  const spinner = ora('Fetching issues from Linear...').start();

  try {
    const client = await getLinearClient();
    const limit = options.limit ? parseInt(options.limit, 10) : 10;
    const format = options.format || 'text';

    // Build the query filter
    const filter: IssueFilter = {};
    if (options.team) {
      filter.team = { key: { eq: options.team.toUpperCase() } };
    }

    if (options.status) {
      filter.state = { name: { eq: options.status } };
    }

    if (options.assignee) {
      filter.assignee = { name: { eq: options.assignee } };
    }

    // Fetch issues
    const issues = await client.issues({filter});
    const issuesList = issues.nodes;

    spinner.stop();

    if (issuesList.length === 0) {
      if (format === 'json') {
        console.log(JSON.stringify({ success: false, message: 'No issues found matching your criteria', issues: [] }, null, 2));
      } else {
        console.log(chalk.yellow('No issues found matching your criteria'));
      }
      return;
    }

    // Process and display issues
    const limitedIssues = issuesList.slice(0, limit);
    
    // Map all issues to get complete data including assignees
    const processedIssues = await Promise.all(limitedIssues.map(async (issue) => {
      const assignee = await issue.assignee?.then(a => a?.name || null) || null;
      const status = await issue.state?.then(s => s?.name || null) || null;
      
      return {
        identifier: issue.identifier,
        title: issue.title,
        assignee,
        status,
        description: issue.description || undefined,
        url: issue.url
      } as IssueOutput;
    }));

    formatOutput(
      {
        issues: processedIssues,
        total: issuesList.length,
        showing: Math.min(issuesList.length, limit)
      },
      format,
      (data) => {
        // Display issues in text format
        data.issues.forEach((issue) => {
          console.log(
            `${chalk.underline(chalk.bold(issue.identifier))} ${chalk.underline(issue.title)} ${issue.assignee ? chalk.underline(issue.assignee) : ''}`,
          );
          console.log(
            `${chalk.italic(issue.description || '')}`
          );
          console.log(`  ${chalk.dim(issue.url)}\n`);
        });
        
        console.log(chalk.dim(`Showing ${data.showing} of ${data.total} issues`));
      }
    );
  } catch (error) {
    spinner.fail('Failed to fetch issues');
    
    if (options.format === 'json') {
      console.log(JSON.stringify({ 
        success: false, 
        message: `Error: ${error instanceof Error ? error.message : String(error)}` 
      }, null, 2));
    } else {
      console.error(chalk.red(`Error: ${error instanceof Error ? error.message : String(error)}`));
    }
  }
}
