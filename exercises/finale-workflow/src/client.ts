import { Connection, Client } from '@temporalio/client';
import { CertificateGeneratorWorkflow } from './workflows';
import { uuid4 } from '@temporalio/workflow';

async function run() {
  const connection = await Connection.connect();

  const client = new Client({
    connection,
  });

  const handle = await client.workflow.start(CertificateGeneratorWorkflow, {
    // TO DO: Change 'Maxim Fateev' to your name
    args: ['Maxim Fateev'],
    taskQueue: 'generate-certificate-taskqueue',
    workflowId: 'cert-generator-workflow-' + uuid4(),
  });

  console.log(`Started workflow ${handle.workflowId}`);
  console.log(`You can find your certificate of completion here:`, await handle.result());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});