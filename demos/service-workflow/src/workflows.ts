import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const {getSpanishGreeting, getSpanishFarewell} = proxyActivities<typeof activities>({
  startToCloseTimeout: '10 seconds',
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

export async function greeting(name:string): Promise<string> {
  const response = await getSpanishGreeting(name)
  return response
}

export async function farewell(name: string): Promise<string> {
  const response = await getSpanishFarewell(name)
  return response
}

