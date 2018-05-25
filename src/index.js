import React from 'react';
import SimpleView from './view/container';
import store from './reducer';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

render(
    <Provider store={store}>
        <SimpleView/>
    </Provider>,
    document.getElementById('root')
);
