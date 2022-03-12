# GitHub Action to AWS CloudFormation Stack status checks

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![version](https://img.shields.io/github/v/release/poad/aws-cloudformation-stack-status-checker?display_name=tag&include_prereleases&sort=semver)](VERSION)

## Usage

### Retrives status of AWS CloudFormation Stack

```yaml
    - name: 'Retrives status of AWS CloudFormation Stack'
      id: stack-status
      uses: poad/aws-cloudformation-stack-status-checker@v1.0.0
      with: 
        stack-name: 'test-stack'
  
    - name: 'Another example step'
      run: echo ${{ steps.stack-status.outputs.status }}
```

## License

Any contributions made under this project will be governed by the [MIT License](LICENSE)
