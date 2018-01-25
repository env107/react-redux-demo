import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {createStore} from 'redux';

import {statics}  from './init';
import todoApp from './reducer/todoAppReducer';
import {Provider} from "react-redux";

var store = createStore(todoApp);

console.log(store.getState())

let subscribe = store.subscribe(()=>{
    console.log("SUBSCRIBE:",store.getState())
})


render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,document.getElementById("root")
)

if (module.hot) {  
    module.hot.accept()  
}  
// //取消监听
//  subscribe();