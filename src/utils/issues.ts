import chalk from 'chalk';
import ora from 'ora';
import { getLinearClient } from './linear.js';
import { IssueFilter } from '@linear/sdk/dist/_generated_documents.js';

type ListIssuesOptions = {
  team?: string;
  status?: string;
  assignee?: string;
  limit?: string;
};

export async function listIssues(options: ListIssuesOptions): Promise<void> {
  const spinner = ora('Fetching issues from Linear...').start();
  
  try {
    const client = await getLinearClient();
    const limit = options.limit ? parseInt(options.limit, 10) : 10;
    
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
      console.log(chalk.yellow('No issues found matching your criteria'));
      return;
    }
    
    // Display issues
    issuesList.slice(0, limit).forEach((issue) => {
      console.log(
        `${chalk.bold(issue.identifier)} ${issue.title} || 'Unknown')}`
      );
      console.log(`  ${chalk.dim(issue.url)}\n`);
    });
    
    console.log(chalk.dim(`Showing ${Math.min(issuesList.length, limit)} of ${issuesList.length} issues`));
  } catch (error) {
    spinner.fail('Failed to fetch issues');
    console.error(chalk.red(`Error: ${error instanceof Error ? error.message : String(error)}`));
  }
}
