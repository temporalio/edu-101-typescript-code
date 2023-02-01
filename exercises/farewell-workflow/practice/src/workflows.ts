import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

// TODO: add your new Activity to the list of Activities that will use the Activity options below
const {getSpanishGreeting, } = proxyActivities<typeof activities>({
  startToCloseTimeout: '10 seconds',
});

export async function greeting(name:string): Promise<string> {
  const response = await getSpanishGreeting(name);
  return response;
}

// TODO: write an exportable function that uses a Promise to return the response from your Activity



