declare module "@sapiens/spjs" {
  export type SapiensModule = { [key: string]: Function } & {
    [key: string]: string | number | object | Array<any>;
  };
}

declare const mj: {
  log: (string) => void;
};
