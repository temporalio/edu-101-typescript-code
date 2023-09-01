import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const { getSpanishGreeting } = proxyActivities<typeof activities>({
  startToCloseTimeout: '10 seconds',
});

export async function greeting(name: string): Promise<string> {
  const response = await getSpanishGreeting(name);
  return response;
}
