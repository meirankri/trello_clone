
    import { createStore, applyMiddleware } from 'redux';
    import {composeWithDevTools } from "redux-devtools-extension";
    import reducers from "./reducers/reducer";
    const store = createStore(reducers,composeWithDevTools(
        applyMiddleware(),
        // other store enhancers if any
      ));
    
    export default store;
