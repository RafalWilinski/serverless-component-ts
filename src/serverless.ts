import { Component } from '@serverless/core';

class ExampleTSComponent extends Component {
  default(inputs: any) {
    this.context.log('Hello from Typescript Serverless Component!');

    return Promise.resolve({
      tsComponent: 'Hello from Typescript Serverless Component!',
      inputs
    });
  }

  remove() {
    this.context.log('Removing TS Component...');
    
    return Promise.resolve({
      remove: true
    });
  }
}

module.exports = ExampleTSComponent;
