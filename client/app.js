import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

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
import HomePage from "./components/homepage/HomepPage";

import RegisterContainer from "./components/Register/RegisterContainer";

// Initialize redux store and thunk middleware
const store = createStore(rootReducer, applyMiddleware(routing));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/register' exact component={RegisterContainer}/>
      </Switch>

    </Router>
  </Provider>,
  document.getElementById("root")
);
