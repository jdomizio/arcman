import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'common/store';
import 'normalize.css';
import App from './App';

render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById('react-root')
);
