export type HammerstoneStateParamTable = {
  clientID?: number;
  tribeID?: number;
  serverWorld?: any;
};

export type HammerstoneSaveState = {
  getValue: <T>(
    key: string,
    paramTable: HammerstoneStateParamTable & { default?: T }
  ) => T | undefined;

  setValue: (
    key: string,
    value: any,
    paramTable: HammerstoneStateParamTable
  ) => void;

  getValueClient: <T>(key: string, defaultValue?: T) => T | undefined;

  setValueClient: (key: string, value: any) => void;

  getValueServer: <T>(
    key: string,
    clientID: number,
    defaultValue?: T
  ) => T | undefined;

  setValueServer: (key: string, value: any, clientID: string) => void;

  resolveClientID: (paramTable: HammerstoneStateParamTable) => void;

  getPrivateShared: (paramTable: HammerstoneStateParamTable) => any;
};
