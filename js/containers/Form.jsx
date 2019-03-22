import React, { Component } from 'react';
import { getQueryVariables } from '../utils';
import ActionForm from './ActionForm.jsx';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = getQueryVariables();
        this.state.submitted = false;
        this.state.callMade = false; 
        this.state.emailAction = false; 
        
        this.callMade = this.callMade.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);
    }
    
    componentWillMount () {
      this.setState({
        emailAction: window.location.href.indexOf('email=call') !== -1
      });
    }

    componentDidMount () {
      window.scrollTo(0, 0);
    }
    
    callMade(evt) {
      evt.preventDefault();
      setTimeout(function() { 
        this.setState({
            submitted: false,
            callMade: true
          }, function(){
            window.scrollTo( 0, 0);
          }); 
        }.bind(this), 5000); 
    }
    
    formSubmitted(evt) {
      let self = this;
      evt.preventDefault();
      
      setTimeout(function() { 
        this.setState({
          submitted: true
        }, function() {
          self.props.modalToggle();
          window.scrollTo( 0, 0);
        });
        }.bind(this), 5000);
    }
    
    
    render() {
        let form = null;
        
        form = (
          < ActionForm formSubmitted={ this.formSubmitted } modalToggle={this.props.modalToggle}/>
        );  
      //   if (!this.state.submitted) {
      //   return (
      //     <div>    
      //     {form}
      //   </div>
      // );
      //   } else {
      //     return (
      //       <div><h2>Thank you for signing!</h2></div>
      //     )
      //   }
      return form
    }
}

export default Form;