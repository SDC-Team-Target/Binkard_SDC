import React from 'react';

import Header from './header.jsx';

import Footer from './footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />

        <Footer />
      </div>
    );
  }
}

export default App;
