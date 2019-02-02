import React, {Component}  from 'react';
class Ftc extends  Component { // need to see if i need script tag as well
    render(){
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
            		
            		<form id="subForm" name="petition" className="js-cm-form" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="A61C50BEC994754B1D79C5819EC1255C95B6F1B295B79960D37CB1478EF479E0C8239A1C03377B3B5CB74A1F01FDAEC5F285EA9384517CE943C7DE4900EFC093">
            			<input type="text" id="fieldName" name="cm-name" required="" placeholder="full name"/>
            			<input type="email" id="fieldEmail" className="js-cm-email-input" name="cm-skujdh-skujdh" required="" placeholder="email address"/>
            			<input type="text" id="fieldjjdtutu" name="cm-f-jjdtutu" pattern="\d*" required="" placeholder="zip code"/>
            			<input type="hidden" id="fieldjttiuku" name="cm-f-jttiuku" value=""/>
            			<input type="hidden" id="fieldjtdyili" name="cm-f-jtdyili" value=""/>
            			<button className="js-cm-submit-button" type="submit"></button>
            		</form>
            		<script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
            		
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