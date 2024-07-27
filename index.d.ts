import { SapiensModule } from "@sapiens/spjs";

declare module "@sapiens/spjs" {
  export type SapiensModule ={
    [key: string]: string | number | object | Array<any> | Function;
  };
}

declare global {
  function mjrequire(string: string): SapiensModule;
  const mj: {
    log: (...objects: any[]) => void;
    warn: (...objects: any[]) => void;
    error: (...objects: any[]) => void;
    debug: (...objects: any[]) => void;
    get: (object: object, ...string: string[]) => any;
    tostring: (
      obj: any,
      indent?: number,
      addVerboseLoggingInfo?: boolean
    ) => string;
    tableToString: (
      table: object,
      indent?: number,
      addVerboseLoggingInfo?: boolean
    ) => string;
    printTable: (table: object) => void;
    capitalize: (str: string) => string;
    isNan: (value: any) => boolean;
  };
}
