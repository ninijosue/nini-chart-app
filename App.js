import React from 'react';
import PureApp from "./app/index";
import {Provider} from "react-redux";
import store from './app/redux/store';
const App = _=>(
    <Provider store={store} >
        <PureApp />
    </Provider>
)
export default App;