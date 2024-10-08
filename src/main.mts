import * as core from '@actions/core';
import {
  CloudFormationClient,
  DescribeStacksCommand,
} from '@aws-sdk/client-cloudformation';

async function run(): Promise<void> {
  try {
    const StackName: string = core.getInput('stack-name', {required: true});
    const region = core.getInput('region', {required: false});
    const client = new CloudFormationClient(
      region && region.length > 0 ? {region} : {},
    );
    const resp = await client.send(
      new DescribeStacksCommand({
        StackName,
      }),
    );

    if (resp.Stacks === undefined) {
      core.setFailed('Stack was not found.');
      return;
    }
    if (resp.Stacks !== undefined && resp.Stacks.length > 1) {
      core.setFailed('Multiple Stacks matched.');
      return;
    }

    const status = resp.Stacks[0].StackStatus;

    core.setOutput('status', status);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
