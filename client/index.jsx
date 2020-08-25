import React from 'react';

import ReactDOM from 'react-dom';

import Header from './components/header.jsx';

import Footer from './components/footer.jsx';

const { document } = window;

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
