import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './Timer';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Timer />, document.getElementById('root'));
registerServiceWorker();
