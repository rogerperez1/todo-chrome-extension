import { IAppState, actionMethods, viewActionTypes } from "./Types";
import * as types from "./Types";

export function defaultState(): IAppState {
  return {
    loading: false,
    today: "today's date"
  };
}

export function appState(
  state = defaultState(),
  action: actionMethods
): IAppState {
  switch (action.type) {
    case viewActionTypes.ADD_ERROR:
      return onShowError(state, action);
    case viewActionTypes.CANCEL:
      return onCancel(state);

    default:
      return state;
  }
}

const onShowError = (
  state: IAppState,
  action: types.IOnShowError
): IAppState => {
  return {
    ...state,
    error: action.error,
    loading: false
  };
};

const onCancel = (state: IAppState): IAppState => {
  return {
    ...state,
    loading: false
  };
};
