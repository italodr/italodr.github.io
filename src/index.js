import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';

import App from './App';
import 'styles/crp.styles';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
