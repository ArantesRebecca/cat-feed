import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FeedPage from './Modules/Components/Feed/FeedPage.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FeedPage />, document.getElementById('root'));
registerServiceWorker();
