import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface TestStackProps extends cdk.StackProps {
  appName: string,
  timestamp?: string,
}

export class TestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: TestStackProps) {
    super(scope, id, props);

  }
}
