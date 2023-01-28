import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const {getSpanishGreeting} = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
})

// const {
//   getSpanishGreeting,
//   // completeSomethingAsync,
// } = proxyActivities<typeof activities>({
//   retry: {
//     initialInterval: '50 milliseconds',
//     maximumAttempts: 2,
//   },
//   startToCloseTimeout: '30 seconds',
// });

export async function workflowName(name: string): Promise<string> {
  const greeting = await getSpanishGreeting(name);
  return greeting
}

