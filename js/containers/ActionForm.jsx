import React, { Component } from 'react';
import { getQueryVariables } from '../utils';
import { CONF, URLS } from '../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ActionForm extends Component {

    constructor(props) {
        super(props);
        this.state = getQueryVariables();
        this.state.sent = false;
      
        this.onSubmit = this.onSubmit.bind(this);
        this.click = this.click.bind(this);
    }
    
    onSubmit(evt) {
      evt.preventDefault();
      
      const fullname = document.getElementById('fullname'); // changed 
      const email = document.getElementById('emailform'); // error here????
      // const address1 = document.getElementById('street');
      console.log("PRINGINT INFORMATION");
      console.log(fullname);
      console.log(email);
      const zip = document.getElementById('zip');   

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const nameRegex = /^[A-Za-z '.-]+$/.test(fullname.value);
      
      console.log("PRINGIN NAME STUFF");
      console.log(fullname.value);
      console.log(fullname.value.trim());
      if (!fullname.value.trim() || !nameRegex) {
        fullname.focus();
        alert('Please enter your name.');
        return;
      }
      console.log("PRINTING EMAIL STUFF");
      // const email = form.email;
      console.log(email.value);
      console.log(email.value.trim());
      if (!email.value.trim()) {
        email.focus();
        alert('Please enter your email.');
        return;
      } else if (!emailRegex.test(email.value.trim())) {
        email.focus();
        alert('Please enter a valid email.');
        return;
      }
      
      // const address1 = form.street;
      // if (!address1.value.trim()) {
      //   address1.focus();
      //   alert("Please enter your address.");
      //   return;
      // }
      
      // const zip = form.zip;
      if (!zip.value.trim()) {
        zip.focus();
        alert('Please enter your Zipcode.');
        return;
      } else if (zip.value.length < 5 || zip.value.length > 5) {
        zip.focus();
        alert('Please enter a valid Zipcode.');
        return;
      }
      
      // not sure about this part 
      const fields = {
        'action_user_agent': navigator.userAgent,
        'country': 'United States',
        'email': email.value.trim(),
        'form_name': 'act-petition',
        'js': 1,
        'name': fullname.value.trim(),
        'zip': zip.value.trim(),
        'opt_in': 1,
        'page': CONF.actionKitPageShortName,
        'source': this.state.source || 'website'
      };
      
       this.sendFormToActionKit(fields);
    }
    
    sendFormToActionKit(fields) {
      // iFrame
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.setAttribute('name', 'actionkit-iframe');
      document.body.appendChild(iframe);
      
      // Form
      const form = document.createElement('form');
      form.style.display = 'none';
      form.setAttribute('action', URLS.actionKit);
      form.setAttribute('method', 'post');
      form.setAttribute('target', 'actionkit-iframe');
      document.body.appendChild(form);
      
      Object.keys(fields).forEach(function(key) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      });
  
      form.submit();  
    }
    
    click(e){
      this.onSubmit(e);
      this.setState({
        sent: true
      });
      this.props.formSubmitted(e);
    }
    
    render() {
      let button = null;
      
      if(this.state.sent){
        button = (
          <button className="btn">
            <span>Sending...</span>
          </button>
        );
      } else { // changing span part 
        button = (
          <button type="submit" onClick={ this.click } ><FontAwesomeIcon icon={['fas', 'chevron-right']} /></button>
        );
      }
      
      return(
        <form id="subForm" name="petition" className="js-cm-form">
    			<input type="text" id="fullname" name="fullname" placeholder="full name" pattern="[A-Za-z '.-]+"/>
    			<input type="email" id="emailform" name="email" required="" placeholder="email address"/>
    			<input type="text" id="zip" name="zip" required="" placeholder="zip code"/>
    			{button}
    		</form>
      )
    }  
  }
  
export default ActionForm