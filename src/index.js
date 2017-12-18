import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Firebase from './components/Firebase/Firebase';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Firebase />, document.getElementById('root'));
registerServiceWorker();
