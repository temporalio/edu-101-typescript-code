import { Connection, Client } from '@temporalio/client';
import { nanoid } from 'nanoid';
import { greeting } from './workflows';

async function run() {
  if (process.argv.length <= 2) {
    console.error('Must specify a name as the command-line arguments');
    process.exit(1);
  }
  const name = process.argv[2];

  const connection = await Connection.connect({ address: 'localhost:7233' });

  const client = new Client({
    connection,
  });

  const result = await client.workflow.execute(greeting, {
    args: [name],
    taskQueue: 'translation-tasks',
    workflowId: 'workflow-' + nanoid(),
  });
  console.log(`The greeting Workflow returned: ${result}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
