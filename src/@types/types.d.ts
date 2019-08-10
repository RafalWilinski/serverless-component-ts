declare module '@serverless/core' {
  interface KV {
    [key: string]: any
  }

  interface Context {
    credentials: any;
    resourceId: string;
    log: (msg: string) => void;
    debug: (msg: string) => void;
    status: (msg: string) => void;
    output: (key: string, val: string) => void;
  }

  export class Component {
    id: string;
    context: Context;
    state: KV;

    default(inputs?: any): Promise<any>;
    remove(inputs?: any): Promise<any>;

    private save();
    private load(nameOrPath: string, componentAlias: string): any;
  }
}