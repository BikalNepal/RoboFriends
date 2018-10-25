import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import CardList from './CardList';
import App from './App';
import tachyons from 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
