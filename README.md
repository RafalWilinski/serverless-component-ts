# serverless-component-ts

Boilerplate for creating [Serverless Components](https://github.com/serverless/components) using Typescript.

<p>
  <img src="https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/rafalwilinski">
    <img alt="Twitter: rafalwilinski" src="https://img.shields.io/twitter/follow/rafalwilinski.svg?style=social" target="_blank" />
  </a>
</p>

### 1. Install

```shell
$ npm install -g serverless
```

### 2. Create

Just create a `serverless.yml` file

```shell
$ touch serverless.yml
```

and clone component boilerplate

```shell
git clone https://github.com/RafalWilinski/serverless-component-ts
```

### 3. Configure

```yml
# serverless.yml

tsComponent:
  component: '../serverless-component-ts'
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
