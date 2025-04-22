import { LinearClient } from '@linear/sdk';
import fs from 'fs';
import path from 'path';
import os from 'os';
import Conf from 'conf';

const config = new Conf({
  projectName: 'linear-cli-tool'
});

export async function getLinearClient(): Promise<LinearClient> {
  let apiKey = config.get('apiKey') as string;
  
  if (!apiKey) {
    throw new Error(
      'Linear API key not found. Please set it using: linear config set-api-key YOUR_API_KEY'
    );
  }
  
  return new LinearClient({ apiKey });
}

export function setApiKey(apiKey: string): void {
  config.set('apiKey', apiKey);
}

export function getApiKey(): string | undefined {
  return config.get('apiKey') as string | undefined;
}

export function clearApiKey(): void {
  config.delete('apiKey');
}
