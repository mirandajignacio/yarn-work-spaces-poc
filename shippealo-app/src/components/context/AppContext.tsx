import React, { FunctionComponent, useEffect } from 'react';
import AuthController from '../../controllers/AuthController';

type Action = { type: 'update-user', user: any }
type Dispatch = (action: Action) => void
type State = { user: any }

const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case 'update-user': {
      return { user: action.user };
    }
    default: {
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`);
    }
  }
}

const AppProvider = (props): FunctionComponent => {
  const [state, dispatch] = React.useReducer(countReducer, { user: undefined });
  const { children } = props;

  const handleOnAuthStateChanged = (user) => {
    dispatch({ type: 'update-user', user });
  };

  useEffect(() => {
    AuthController.fireAppInit(handleOnAuthStateChanged);
  }, []);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

function useAppState(): State {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }

  return context;
}

function useAppDispatch(): Dispatch {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }

  return context;
}
export { AppProvider, useAppState, useAppDispatch };
