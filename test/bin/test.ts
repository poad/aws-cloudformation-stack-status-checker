#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TestStack } from '../lib/test-stack';

const app = new cdk.App();

const timestamp = app.node.tryGetContext('timestamp') as string | undefined;

const appName = 'aws-cloudformation-stack-status-checker-test';
new TestStack(app, `${appName}${timestamp ? `-${timestamp}` : ''}`, {
  appName,
  timestamp
});
