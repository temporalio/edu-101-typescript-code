import { Connection, WorkflowClient } from '@temporalio/client';
import { sayHelloWorkflow } from './workflows';

async function run() {
  // Connect to the default Server location (localhost:7233)
  const connection = await Connection.connect();
  // In production, pass options to configure TLS and other settings:
  // {
  //   address: 'foo.bar.tmprl.cloud',
  //   tls: {}
  // }

  const client = new WorkflowClient({
    connection,
    // namespace: 'foo.bar', // connects to 'default' namespace if not specified
  });

  const handle = await client.start(sayHelloWorkflow, {
    // type inference works! args: [name: string]
    args: ['Temporal'],
    taskQueue: 'greeting-tasks',
    // in practice, use a meaningful business id, eg customerId or transactionId
    workflowId: 'my-first-workflow',
  });
  console.log(`Started workflow ${handle.workflowId}`);

  // optional: wait for client result
  console.log(await handle.result()); // Hello, Temporal!
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});