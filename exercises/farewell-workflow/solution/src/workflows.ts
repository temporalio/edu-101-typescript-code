import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';


const { getSpanishGreeting, getSpanishFarewell } = proxyActivities<
  typeof activities
>({
  startToCloseTimeout: '10 seconds',
});

export async function greeting(name: string): Promise<string> {
  const greeting = await getSpanishGreeting(name);
  let farewell = "";
  farewell = await getSpanishFarewell(name);
  const helloGoodbye = "\n" + greeting + "\n" + farewell;
  return helloGoodbye;
}











