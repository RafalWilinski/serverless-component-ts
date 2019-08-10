# serverless-component-ts

Boilerplate for creating [Serverless Components](https://github.com/serverless/components) using Typescript.

<p>
  <img src="https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/rafalwilinski">
    <img alt="Twitter: rafalwilinski" src="https://img.shields.io/twitter/follow/rafalwilinski.svg?style=social" target="_blank" />
  </a>
</p>

&nbsp;

1. [Install](#1-install)
2. [Create](#2-create)
3. [Configure](#3-configure)
4. [Deploy](#4-deploy)

&nbsp;

### 1. Install

```shell
$ npm install -g serverless
```

### 2. Create

Just create a `serverless.yml` file

```shell
$ touch serverless.yml
$ touch .env      # your AWS api keys
```

### 3. Configure

```yml
# serverless.yml

tsComponent:
  component: '../src'
  inputs:
    foo: bar
```

### 4. Deploy

```shell
$ serverless
```

&nbsp;

### New to Components?

Checkout the [Serverless Components](https://github.com/serverless/components) repo for more information.

### Author

👤 **Rafal Wilinski**

- Twitter: [@rafalwilinski](https://twitter.com/rafalwilinski)
- Github: [@RafalWilinski](https://github.com/RafalWilinski)

### Show your support

Give a ⭐️ if this project helped you!
