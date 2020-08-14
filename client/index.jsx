import React from 'react';

import ReactDOM from 'react-dom';

import Header from './components/header.jsx';

import Footer from './components/footer.jsx';

import Test from './components/test.jsx';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Test />, document.getElementById('test'));
