import React, { Component } from 'react';
import { getQueryVariables } from '../utils';
import { CONF, URLS } from '../config';
import jsonData from "../../legislators-current.json";
import legislators_media from "../../legislators-social-media.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { keys } from '../config/keys.js'

class ActionForm extends Component {

    constructor(props) {
        super(props);
        this.state = getQueryVariables();
        this.state.sent = false;
        
        this.state.zipcode = '';
        this.state.usstate = '';
        this.state.twitterHandles = [];
        this.state.congressMembersID = [];
        
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.click = this.click.bind(this);
        this.sendFormToActionKit = this.sendFormToActionKit.bind(this);
        this.lookUpStateByZipCode = this.lookUpStateByZipCode.bind(this);
        this.lookUpTwitterHandles = this.lookUpTwitterHandles.bind(this);
    }

    lookUpTwitterHandles() {
      const copyMembersID = this.state.congressMembersID.slice(); 
      for(var i = 0; i < copyMembersID.length; i++) {
        for (var j = 0; j < legislators_media.length; j++) {
          var object = legislators_media[j];
          var legislator_bioID = object.id.bioguide;
          var twitterHandle = object.social.twitter;
          if (legislator_bioID == copyMembersID[i]) {
            this.setState({ twitterHandles: [...this.state.twitterHandles, twitterHandle]});
          }
        }
      }
    }

    lookUpStateByZipCode(zipcode) {       
      var url = "https://www.zipcodeapi.com/rest/"+keys.api_key+"/info.json/" + zipcode + "/radians";
      $.ajax({
        "url": url,
        "dataType": "json"
      }).done(function(data) {
        this.setState({usstate: data.state});
        for(var i = 0; i < jsonData.length; i++) {
          var object = jsonData[i];
          var legislator_bioID = object.id.bioguide; 
          var objectTermsLst = object.terms;
          var currentTerm = objectTermsLst[objectTermsLst.length - 1];
          if (currentTerm.state == this.state.usstate) { 
            this.setState({ congressMembersID: [...this.state.congressMembersID, legislator_bioID]});
          }
        }
        this.lookUpTwitterHandles();
      }.bind(this)).fail(function(data) {
        console.log("Request failed");
      });
    }

    handleChange(event) { 
      this.setState({zipcode: event.target.value});
    }
    
    onSubmit(evt) {
      evt.preventDefault();
      const fullname = document.getElementById('fullname'); 
      const email = document.getElementById('emailform'); 
      const zip = document.getElementById('zip'); // dont think i need this part 
      this.lookUpStateByZipCode(this.state.zipcode); // correct syntax 
      // this.lookUpCongressByZipcode(this.state.zipcode);

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const nameRegex = /^[A-Za-z '.-]+$/.test(fullname.value);
      
      if (!fullname.value.trim() || !nameRegex) {
        fullname.focus();
        alert('Please enter your name.');
        return;
      }

      if (!email.value.trim()) {
        email.focus();
        alert('Please enter your email.');
        return;
      } else if (!emailRegex.test(email.value.trim())) {
        email.focus();
        alert('Please enter a valid email.');
        return;
      }
      
      if (!zip.value.trim()) {
        zip.focus();
        alert('Please enter your Zipcode.');
        return;
      } else if (zip.value.length < 5 || zip.value.length > 5) {
        zip.focus();
        alert('Please enter a valid Zipcode.');
        return;
      }
      
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
    
    click(e) {
      var self = this;
      this.onSubmit(e);
      this.setState({
        sent: true
      });
      this.props.formSubmitted(e);
      setTimeout(function() {
        self.setState({
          sent: false
        })
      }, 1000);
    }
    
    render() {
      let button = null;
      
      if(this.state.sent){
        button = (
          <button type="submit" ><FontAwesomeIcon icon={['fas', 'spinner']} /></button>
        );
      } else { 
        button = (
          <button type="submit" onClick={ this.click } ><FontAwesomeIcon icon={['fas', 'chevron-right']} /></button>
        );
      }
      
      return(
        <form id="subForm" name="petition" className="js-cm-form">
          <input type="text" id="fullname" name="fullname" placeholder="full name" pattern="[A-Za-z '.-]+"/>
          <input type="email" id="emailform" name="email" required="" placeholder="email address"/>
          <input type="text" id="zip" name="zip" required="" placeholder="zip code" value={this.state.zipcode}
            onChange={this.handleChange}/>
          <div className="text-error"></div> 
          {button}
        </form>
      );
    }  
  }
  
export default ActionForm;