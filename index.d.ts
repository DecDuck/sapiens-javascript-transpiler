import { SapiensModule } from "@sapiens/spjs";

declare module "@sapiens/spjs" {
  export type SapiensModule = { [key: string]: Function } & {
    [key: string]: string | number | object | Array<any>;
  };
}

declare global {
  function mjrequire(string: string): void;
  const mj = {};
}
