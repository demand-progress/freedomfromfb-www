import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Header extends  Component { 
    
    render(){
        return (
            <header> 
                <menu id="social">
            		<li id="facebook"><a href="https://www.facebook.com/demandprogress/" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
            		<li id="twitter"><a href="https://twitter.com/FacebookBreakup" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
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
            		Tell the FTC a fine isn’t enough. It’s time to break up Facebook and make the internet safe for democracy and privacy.
            		<img src="images/logo.png" id="logo"/>
            	</section>
        	</header>
        ); 
    }    
}

export default Header;