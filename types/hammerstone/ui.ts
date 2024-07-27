export type ActionElement = SapiensModule & {
  view: any;
  name: string;

  init: (viewContainer: any, gameUI: any, hubUI: any, world: any) => any;
};

export type GameElement = SapiensModule & {
  gameUI: any;
  name: string;
  view: any;

  init: (gameUI: any) => any;
  updateGameElement: (gameUI: any) => any;
};

export type ManageElement = SapiensModule & {
  name: string;
  view: any;
  parent: any;
  icon: string;

  init: (contentView: any) => void;
};

export type HammerstoneUIManager = {
  registerActionElement: (actionElement: ActionElement) => void;
  registerGameElement: (gameElement: GameElement) => void;
  registerManageElement: (manageElement: ManageElement) => void;
};
