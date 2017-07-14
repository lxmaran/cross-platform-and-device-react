//react imports
import React, {Component} from 'react';

//redux imports
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

//component imports
import ChatComponent from './components/ChatComponent';
import LoginComponent from './components/LoginComponent';
import {checkUserExists} from './actions/index';
import rootReducer from './readucers/index'
import {MuiThemeProvider} from "material-ui";

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware
    )
);

const Main = connect(
    (state) => (
        {authorized: state.user.authorized}
    )
)(({authorized, dispatch}) => {
    if (authorized) {
        return (<ChatComponent />);
    } else {
        dispatch(checkUserExists());
        return (<LoginComponent />);
    }
});

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Main />
                </Provider>
            </MuiThemeProvider>
        );
    }
}