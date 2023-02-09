import { Client } from '@temporalio/client';
import { randomUUID } from 'node:crypto';
// TODO: modify the line below to import the workflow name you created
import { "TODO" } from '../workflows';

async function run() {
  const client = new Client();
  // TODO: modify the line below to use your new workflow name
  const result = await client.workflow.execute("TODO", {
    args: ['Tina'],
    taskQueue: 'translation-tasks',
    workflowId: 'workflow-' + randomUUID(),
  });
  console.log(`The greeting Workflow returned: ${result}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});