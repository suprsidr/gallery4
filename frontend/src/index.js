import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/Page';
import * as serviceWorker from './serviceWorker';

export const AppContext = React.createContext();

const App = () => {
  const [state, updateState] = useState({ sheets: [] });

  /*
   * the setState we get from the hook does not do the shallow merge.
   * Nor does it take a second arg for callback
   */
  const setState = (newState, cb = null) => {
    updateState({
      ...state,
      ...newState
    });
    cb && cb();
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState
      }}
    >
      <Page />
    </AppContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
