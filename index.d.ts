import {
  HammerstoneInputManager,
  SapiensKeyMapping,
} from "./types/hammerstone/input";
import { HammerstoneLogging } from "./types/hammerstone/logging";
import { HammerstoneSaveState } from "./types/hammerstone/saveState";
import { HammerstoneShadowing } from "./types/hammerstone/shadow";
import { HammerstoneUIManager } from "./types/hammerstone/ui";

declare global {
  function mjrequire(string: "hammerstone/logging"): HammerstoneLogging;
  function mjrequire(string: "hammerstone/utils/shadow"): HammerstoneShadowing;
  function mjrequire(string: "hammerstone/ui/uiManager"): HammerstoneUIManager;
  function mjrequire(
    string: "hammerstone/input/inputManager"
  ): HammerstoneInputManager;
  function mjrequire(string: "mainThread/keyMapping"): SapiensKeyMapping; // Courtesy of the InputManager module
  function mjrequire(
    string: "hammerstone/state/saveState"
  ): HammerstoneSaveState;
  function mjrequire(string: string): SapiensModule;

  type SapiensModule = {
    [key: string]: any;
  };
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

export type * from "./types/hammerstone/logging";
export type * from "./types/hammerstone/shadow";
export type * from "./types/hammerstone/input";

// Exported with a name because there's multiple components
export type * as HammerstoneUI from "./types/hammerstone/ui";
