import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Stylesheets/css/main.css'
import './Stylesheets/css/materialdesignicons.css'
import './Stylesheets/css/w3.css'

import Firebase from './Components/Firebase/Firebase';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Firebase />, document.getElementById('root'));
registerServiceWorker();
