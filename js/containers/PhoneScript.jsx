import React, { Component } from 'react'
import { CONF, URLS } from '../config'
import ajax from '../utils/ajax'
import PhoneScriptText from './PhoneScriptText.jsx' 

class PhoneScriptForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            sent: false
         }
         
         this.onClickSendFeedback = this.onClickSendFeedback.bind(this)
    }

    onClickSendFeedback(e) {
        e.preventDefault();

        const data = {
            campaign: CONF.callCampaign,
            subject: 'Feedback from ' + (CONF.prettyCampaignName || CONF.callCampaign),
            text: '',
        };

        const fields = [
            document.querySelector('#who'),
            document.querySelector('#how'),
        ]

        fields.forEach(field => {
            data.text += `${field.name}:\n${field.value}\n\n`;
        })

        let url = URLS.feedback;

        for (let key in data) {
            url += key;
            url += '=';
            url += encodeURIComponent(data[key]);
            url += '&';
        }

        ajax.get(url);

        this.setState({
            sent: true,
        })
            
    }

    render() {
      let button = null
      if(this.state.sent){
        button = (
          <button className="btn" >Thank You!</button>
        )
      } else {
        button = (
          <button className="btn" onClick={this.onClickSendFeedback} type="submit" name="submit">Send Feedback</button>
        )
      }
        return (
          <div>
              <form className="bftn-form call-action-form" action="#" method="get" >
                <h3>We're calling you now.</h3>
                <br/><br/>
                <div>
                  <p>We will connect you to the offices of your lawmakers. You can tell them:</p>
                  <p>"I am a constituent. Please support the War Powers Resolution that would end American involvement in the war in Yemen. American military aid is fueling a humanitarian crisis, and it is time for this to stop."</p>
                  <p>After each conversation, you can press * and we’ll connect you to the next office.</p>
                  <p>Or dial 202-899-8938 to connect.</p>
                </div>
                <div id="calling">
                  <h4>Who did you speak with?</h4>
                  <input required="required" type="text" name="Who did you speak with?" id="who" style={{'fontSize': '24px', 'height': '50px'}} />
                  <h4>How did it go?</h4>
                  <textarea required="required" type="text" name="How did it go?" id="how" style={{'fontSize': '24px', 'width': '100%', marginBottom: '10px'}} rows="4"></textarea>
                </div>
                <br />
                {button}
              </form>
              <hr/>
            </div>
        )
    }
}

export default PhoneScriptForm