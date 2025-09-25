# GitHub Action to AWS CloudFormation Stack status checks

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![version](https://img.shields.io/github/v/release/poad/aws-cloudformation-stack-status-checker?display_name=tag&include_prereleases&sort=semver)](VERSION)

## Usage

### Retrives status of AWS CloudFormation Stack

```yaml
    - name: 'Retrives status of AWS CloudFormation Stack'
      id: stack-status
      uses: poad/aws-cloudformation-stack-status-checker@v2.0.0
      with: 
        stack-name: 'test-stack'
  
    - name: 'Another example step'
      run: echo ${{ steps.stack-status.outputs.status }}
```

#### Credentials and region

Credential resolve follows the AWS SDK v3 for JavaScript specification.
<https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-region.html>

It is recommended to use [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) to configure credentials in advance.

##### cross regions

The default region can be set via credentials or the environment variable `AWS_REGION`.

To check the stack for a region other than the default region, specify `region` in the Action input as follows

```yaml
    - name: 'Retrives status of AWS CloudFormation Stack'
      id: stack-status
      uses: poad/aws-cloudformation-stack-status-checker@v2.0.0
      with: 
        stack-name: 'test-stack'
        region: us-west-2
```

## License

Any contributions made under this project will be governed by the [MIT License](LICENSE)

## Security Policy

[SECURITY.md](./SECURITY.md) をご覧ください。
