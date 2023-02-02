import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

// This example llustrates how to use a retry policy in a Workflow.
// Since the code change is entirely within the Workflow, only that
// file is provided here.

const { getSpanishGreeting } = proxyActivities<typeof activities>({
  retry: {
    initialInterval: '1500 milliseconds',   // first retry will occur after 15 seconds
    backoffCoefficient: 2,                  // double the delay after each retry
    maximumInterval: '60000 milliseconds',  // up to a maximum delay of 60 seconds
    maximumAttempts: 100,                   // fail the Activity after 100 attempts
  },
  startToCloseTimeout: '90 seconds',
});

export async function greeting(name:string): Promise<string> {
  const response = await getSpanishGreeting(name);
  return response;
}