#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TestStack } from '../lib/test-stack';


const app = new cdk.App();

const region = app.node.tryGetContext('region');
const timestamp = app.node.tryGetContext('timestamp');

const env = region ? { account: app.account, region } : { account: app.account, region: app.region };

const appName = 'aws-cloudformation-stack-status-checker-test';
new TestStack(app, `${appName}${timestamp ? `-${timestamp}` : ''}`, {
  appName,
  timestamp,
  env,
});
