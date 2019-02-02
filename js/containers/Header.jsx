import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Header extends  Component { //<FontAwesomeIcon icon={['fab', 'fa-twitter']} />
    
    render(){
        return (
            <header>
                <menu id="social">  
            		<li id="facebook"><a href="https://www.facebook.com/Freedom-from-FB-1199263703543699/" target="_blank"><FontAwesomeIcon icon={['fab', 'fa-facebook-f']} /></a></li>
            		<li id="twitter"><a href="https://twitter.com/FacebookBreakup" target="_blank"><FontAwesomeIcon icon={['fab', 'fa-twitter']} /></a></li>
            		<li id="instagram"><a href="https://www.instagram.com/facebookbreakup/" target="_blank"><FontAwesomeIcon icon={['fab', 'fa-instagram']} /></a></li>
            		<li id="email"><a href="mailto:press@freedomfromfacebook.com"><FontAwesomeIcon icon={['far', 'fa-envelope']} /></a></li>
            	</menu>
            	<nav role="navigation">
            		<div id="menuToggle">
            			<input type="checkbox"/>
            			<span></span>
            			<span></span>
            			<span></span>
            			<ul id="menu">
            				<a href="#ftc"><li>petition the ftc</li></a>
            				<a href="https://freedomfromfb.com/guide/"><li>how-to guide on privacy</li></a>
            				<a href="#about"><li>about the campaign</li></a>
            				<a href="#coalition"><li>coalition partners</li></a>
            			</ul>
            		</div>
            	</nav>
            	<section id="featured">
            		Facebook has too much power over our lives and democracy. It’s time for us to take that power back.
            		<img src="images/logo.png" id="logo"/>
            	</section>
        	</header>
        ); 
    }    
}

export default Header;