import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas);
import Footer from './Footer.jsx';
// import Main from './Main.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Ftc from './Ftc.jsx';
import Modal from './Modal.jsx'

class App extends Component {
  // <Main />
  constructor() {
    super();
    this.state= {
      modalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  toggleModal() {
    this.setState({modalOpen: !this.state.modalOpen });
  }

  render() {
      return (
        <div>
          <Modal open={this.state.modalOpen} modalToggle={this.toggleModal} />
          <Header />
          <Ftc modalToggle={this.toggleModal} />
          <About />
          <Footer />
        </div>
      );
  }
}

export default App;