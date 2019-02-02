import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
library.add(
   fab
  // far
);
import Footer from './Footer.jsx';
// import Main from './Main.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Ftc from './Ftc.jsx';

class App extends Component {
  // <Main />
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render() {
      return (
        <div>
          <Header />
          <Ftc />
          <About />
          <Footer />
        </div>
      );
  }
}

export default App;