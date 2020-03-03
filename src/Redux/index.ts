import { appState } from "./Reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  appState
});

export type AppState = ReturnType<typeof rootReducer>;
