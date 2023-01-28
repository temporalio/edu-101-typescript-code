console.log("hi from client.ts")

// import { Client } from '@temporalio/client';
// import { workflowName } from './workflows';
// import { uuid4 } from '@temporalio/workflow';

// async function run() {
//   const client = new Client();

//   const handle = await client.workflow.start(workflowName, {
//     taskQueue: 'greeting-tasks',
//     workflowId: 'workflow-' + uuid4(),
//     args: ["Tina"],
//   });

//   await handle.result();
//   console.log(Date.now());

// }

// run().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });


// import { Connection, Client } from '@temporalio/client';
// import { workflowName } from './workflows';
// import { uuid4 } from '@temporalio/workflow';

// async function run() {
//   // Connect to the default Server location (localhost:7233)
//   console.log(Date.now());
//   const connection = await Connection.connect();
//   // In production, pass options to configure TLS and other settings:
//   // {
//   //   address: 'foo.bar.tmprl.cloud',
//   //   tls: {}
//   // }

//   console.log(Date.now());
//   const client = new Client({
//     connection,
//     // namespace: 'foo.bar', // connects to 'default' namespace if not specified
//   });

//   const handle = await client.workflow.start(workflowName, {
//     // type inference works! args: [name: string]
//     args: ['Temporal'],
//     taskQueue: 'greeting-tasks',
//     // in practice, use a meaningful business ID, like customerId or transactionId
//     workflowId: 'workflow-test' + uuid4()
//   });
//   await handle.result();
//   console.log(Date.now());
// }

// run().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });