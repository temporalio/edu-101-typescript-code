import { Connection, Client } from '@temporalio/client';
import {uuid4} from '@temporalio/workflow'; 
import { greetingWorkflow } from './workflows';

async function run() {
  console.log(Date.now());
  const connection = await Connection.connect();
  
  console.log(Date.now());
  const client = new Client({
    connection,
  });

  const handle = await client.workflow.start(greetingWorkflow, {
    args: ["Tina"],
    taskQueue: 'greeting-tasks',
    workflowId: 'greeting-workflow-' + uuid4(),
  });
  await handle.result();
  console.log(Date.now());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
