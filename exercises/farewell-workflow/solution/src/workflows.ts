import  *  as wf from '@temporalio/workflow';
import type * as activities from './activities';

export const { getSpanishGreeting } = wf.proxyActivities<typeof activities>({
  startToCloseTimeout: '2 minutes',
});