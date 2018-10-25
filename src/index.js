import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import {robots} from './robots';
import tachyons from 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));

serviceWorker.register();
