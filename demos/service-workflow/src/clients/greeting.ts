import { Client } from '@temporalio/client';
import { greeting } from '../workflows';
import { uuid4 } from '@temporalio/workflow';

async function run() {
  const client = new Client();
  const handle = await client.workflow.start(greeting, {
    args: ['Tina'],
    taskQueue: 'translation-tasks',
    workflowId: 'workflow-' + uuid4(),
  });
  return await handle.result();
} 

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
