import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { OpenWeatherMap } from 'react-weather';

ReactDOM.render(<App />,  document.getElementById('root'));
registerServiceWorker();
