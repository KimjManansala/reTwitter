import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

// Redux Thunk
import thunk from 'redux-thunk';

// React Router
import { Router, Route, Switch } from "react-router-dom";
import history from "./history"; // Import history in any component you want to use it
import { routerMiddleware } from "react-router-redux";

// Router middleware
const routing = routerMiddleware(history);

// Root reducer
import rootReducer from "./reducers/index";

// Components
// import Twitter from "./components/Twitter";
import Homepage from './components/container/Homepage'
import MainPage from "./components/container/MainPage";

// Initialize redux store and thunk middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, applyMiddleware(routing));
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(routing, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path='/main' exact component={MainPage}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
