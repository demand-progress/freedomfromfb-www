import React, {Component}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getQueryVariables } from '../utils';
import Form from './Form.jsx';
import ActionForm from './ActionForm.jsx';

class Ftc extends  Component { // need to see if i need script tag as well
    render(){ // see if copypastesubscribeformlogic does anything
        return (
            <section id="ftc">
            	<section id="description">
            		<p><span id="uppercase">Tell the Federal Trade Commission: It's Time to Break up Facebook's Monopoly.</span></p>
            		<p>The FTC should spin off Instagram, WhatsApp, and Messenger into competing networks, require interoperability, so we have the freedom to communicate across social 
            		networks, and impose strong privacy rules that empower and protect us.</p>
            		<p><span id="uppercase">It's time to make Facebook safe for democracy.</span></p>
            	</section>
            	<section id="petition">
            		<h1>Tell the Federal Trade Commission and sign the petition:</h1>
            		<Form />
            		
            		
            		<div className="clearfix"></div>
            		
            		<p><small>By signing, you agree to receive email messages from Citizens Against Monopoly. You may unsubscribe at any time.</small></p>
            		
            		<div className="clearfix"></div>
            	</section>
            	<div className="clearfix"></div>
            </section>
        );
    }
}
export default Ftc;