export interface IAppState {
    loading: boolean;
    today: string;
    error?:string;
}

export interface IStoreState {
    appState: IAppState;
}

export enum viewActionTypes {
    ADD_ERROR = "ADD_ERROR",
    CANCEL = "CANCEL"
}

export interface IOnShowError {
    type: viewActionTypes.ADD_ERROR;
    error: string;
}


export interface IOnCancel {
    type: viewActionTypes.CANCEL;
}

export type actionMethods = 
 | IOnShowError
 | IOnCancel