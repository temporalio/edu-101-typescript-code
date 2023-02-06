import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

// This example illustrates how to use a Retry Policy in a Workflow.
// Since the code change is entirely within the Workflow, only that
// file is provided here.

const { getSpanishGreeting } = proxyActivities<typeof activities>({
  retry: {
    initialInterval: '15s', // first retry will occur after 15 seconds
    backoffCoefficient: 2, // double the delay after each retry
    maximumInterval: '1m', // up to a maximum delay of 1 minute
    maximumAttempts: 100, // fail the Activity after 100 attempts
  },
  startToCloseTimeout: '90s', // schedule a retry if the Activity function doesn't return within 90 seconds
});

export async function greeting(name: string): Promise<string> {
  const response = await getSpanishGreeting(name);
  return response;
}
