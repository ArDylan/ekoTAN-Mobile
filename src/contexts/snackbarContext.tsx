import React, { createContext, useContext, useEffect, useReducer } from "react";

interface IContextProps {
  state: IState;
  hideSnackbar: () => void;
  showSnackbar: (message: string, type: SnackbarType) => void;
}

interface IState {
  show: boolean;
  message?: string | undefined;
  bgColor?: string | undefined;
}

interface IActions {
  type: string;
  payload?: any;
}

export const SnackbarContext = createContext<IContextProps | undefined>(undefined);

export enum SnackbarType {
  SUCCESS = "SUCCESS",
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR"
}

const initialState = {
  show: false,
  message: undefined,
  bgColor: undefined
};

const reducer = (state: IState, action: IActions) => {
  switch (action.type) {
    case "ShowSnackbar":
      return {
        show: true,
        message: action.payload.message,
        bgColor: action.payload.bgColor
      };
    case "HideSnackbar":
      return {
        show: false
      };
    default:
      return state;
  }
};

export const SnackbarContextProvider = (props: any) => {
  const [state, dispatch] = useReducer<(state: IState, action: IActions) => IState>(
    reducer,
    initialState
  );

  const showSnackbar = (message: string, type: SnackbarType) => {
    let bgColor;
    if (type === SnackbarType.SUCCESS) {
      bgColor = "green";
    } else if (type === SnackbarType.INFO) {
      bgColor = "blue";
    } else if (type === SnackbarType.WARNING) {
      bgColor = "orange";
    } else if (type === SnackbarType.ERROR) {
      bgColor = "red";
    }

    dispatch({
      type: "ShowSnackbar",
      payload: {
        message,
        bgColor
      }
    });
  };

  const hideSnackbar = () => {
    dispatch({ type: "HideSnackbar" });
  };

  return (
    <SnackbarContext.Provider value={{ state, hideSnackbar, showSnackbar }}>
      {props.children}
    </SnackbarContext.Provider>
  );
};

export function useSnackbar(): IContextProps {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within an SnackbarContextProvider");
  }
  return context;
}
