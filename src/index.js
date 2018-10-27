import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import tachyons from 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
