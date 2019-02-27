import React, {Component}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getQueryVariables } from '../utils';
import Form from './Form.jsx';
import ActionForm from './ActionForm.jsx';

class Ftc extends  Component { 
    render(){ 
        return (
            <section id="ftc">
                <section id="description">
                    <p><span id="uppercase">Tell the Federal Trade Commission: It's Time to Break up Facebook's Monopoly.</span></p>
                    <p><span>"The FTC should spin off Instagram, WhatsApp, and Messenger into competing networks, require interoperability, so we have the freedom to communicate across social networks, and impose strong privacy rules that empower and protect us. A fine, even a big one, won’t be enough to make Facebook change."</span></p>
                </section>
                <section id="petition">
                    <h1>Email the FTC:</h1>
                    <Form />
                    
                    
                    <div className="clearfix"></div>
                    <p>
                        <small>One or more of the participating organizations (listed at bottom) may email you about their campaigns.</small>
                        <small className="hide-mobile"> The language to the left will be sent to the FTC commissioners under your name.</small>
                        <small className="hide-desktop"> The language to the bottom will be sent to the FTC commissioners under your name.</small>
                    </p>
                    
                    <div className="clearfix"></div>
                </section>
                <div className="clearfix"></div>
            </section>
        );
    }
}
export default Ftc;

