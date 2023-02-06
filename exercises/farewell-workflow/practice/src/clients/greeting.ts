import { Client } from '@temporalio/client';
import { randomUUID } from 'node:crypto';
import { greeting } from '../workflows';

async function run() {
  const client = new Client();
  const result = await client.workflow.execute(greeting, {
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