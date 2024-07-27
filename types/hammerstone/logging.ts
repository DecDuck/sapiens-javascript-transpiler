export type HammerstoneLogging = {
  log: (...objs: any) => void;
  warn: (...objs: any) => void;
  error: (...objs: any) => void;
  schema: (logId: string, ...objs: any) => void;
};
