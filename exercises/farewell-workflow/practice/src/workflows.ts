import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

// TODO: add your new Activity to the list of Activities that will be configured with Activity options below
const { getSpanishGreeting } = proxyActivities<
  typeof activities
>({
  startToCloseTimeout: '10 seconds',
});

// TODO: write an exportable function that uses a Promise to return the response from your Activity
export async function greeting(name: string): Promise<string> {
  const greeting = await getSpanishGreeting(name);
  let farewell = "";
  // TODO: uncomment the line below and change it to execute the Activity function you created
  // farewell = await getSpanishFarewell(name);
  const helloGoodbye = "\n" + greeting + "\n" + farewell;
  return helloGoodbye;
}












