import { Client } from '@temporalio/client';
// TODO: modify the line below to use import the workflow name you created
import { "TODO" } from '../workflows';
import { uuid4 } from '@temporalio/workflow';

async function run() {
  const client = new Client();
// TODO: modify the line below to use your new workflow name
  const handle = await client.workflow.start("TODO", {
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
