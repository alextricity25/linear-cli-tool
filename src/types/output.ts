// Output types for the Linear CLI tool

export interface BaseOutput {
  success?: boolean;
  message?: string;
}

export interface IssueOutput extends BaseOutput {
  identifier: string;
  title: string;
  assignee?: string;
  status?: string;
  description?: string;
  url: string;
}

export interface ConfigOutput extends BaseOutput {
  apiKey?: string;
}

export type FormatOption = 'text' | 'json';

export interface CommandOptions {
  format?: FormatOption;
}