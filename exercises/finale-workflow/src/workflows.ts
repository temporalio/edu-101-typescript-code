import { proxyActivities } from '@temporalio/workflow';

const { CreatePdf } = proxyActivities({
  startToCloseTimeout: '1 minute',
});

// The CertificateGeneratorWorkflow workflow calls the CreatePdf activity
export async function CertificateGeneratorWorkflow(name: string): Promise<string> {
  // CreatePdf is the Activity Type defined in the implementation of the Java Activity code
  return await CreatePdf(name);
}
