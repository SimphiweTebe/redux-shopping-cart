import React from 'react';
import { render } from 'react-dom';
import './scss/index.scss';

import App from './App';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';


render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));