export type StateType = {
  count: number;
};

export enum Action {
  increase = "increase",
  decrease = "decrease"
}

export type ActionType = {
  type: Action;
  payload: number;
};
