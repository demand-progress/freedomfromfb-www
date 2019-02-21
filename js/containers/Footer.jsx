/////////////////// 
import React, {Component}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Logo from './Logo.jsx';

class Footer extends  Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         orderedLogos: [{name: "About Face: Veterans Against the War", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/5a80a3c3-ea75-4f9f-950a-175aa34ff3d8/About Face Logo.jpg"},
    //                         {name: "Daily Kos", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/c7679f4c-3ee7-4670-84a5-b0c4f2f2e2dc/DailyKosLogo.png"},
    //                         {name: "Defending Rights & Dissent", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/e5d96efb-b426-41f8-be2e-8cd4292033d2/DRAD logo square.png"},
    //                         {name: "Demand Progress Action", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/ffb2acc8-9b36-40ef-bb9a-deb6ecb5ee55/demand-progress.png"},
    //                         {name: "CODEPINK", url: "/images/CP_logo_preview(1).jpeg"},
    //                         {name: "Just Foreign Policy", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/7bd88f32-ac83-47d9-829d-5a68605253d4/just-foreign-policy.jpg"},
    //                         {name: "Progress America", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/8e3e64b3-9932-4b4a-8f80-05d56c6510f7/progress-america.png"},
    //                         {name: "Watchdog.net", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/1f78005d-52c9-47c8-80b9-bd6734fd5fde/watchdog_small.png"},
    //                         {name: "Win Without War", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/b0f2a7b7-e4fe-4839-ac27-c2d3d1e05d49/winwithoutwar.jpg"},
    //                         {name: "World Beyond War", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/f0bec5ad-700e-4d9f-ab8c-7b0abe676ba3/World Beyond War 300x150_preview.jpeg"},
    //                         {name: "The Yemen Peace Project", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/7b93acd3-cc1e-4945-974b-e0454817c289/YPP-logo_preview.png"}]
    //     };
    //     this.state.logosText = this.state.orderedLogos.map(({name, _url}) => {
    //         return name;
    //     });
    //     this.state.logosText = this.state.logosText.join(', ');
    // }

    // componentDidMount(){
    // }

    render(){
       
        // let logos = null;
        
        // let tweet = "";    

        // if(this.props.showLogos || !this.props.isMobile){
        //         logos = this.state.orderedLogos.map(({name, url}) => {
        //             return <Logo key={name} alt={name} src={url}/>
        //             } 
        //         );
        // }
        // might get rid of id on div
        // might incorporate constructor
        return (
            <footer>
            	<ul id="coalition">
            		<li><img src="images/jewish-voice-for-peace.png"/></li>
            		<li><img src="images/demand-progress.png"/></li>
                    <li><img style={{"filter": "none"}} src="images/PasAFV.jpg"/></li>
                    <li><img src="images/progress-america.png"/></li>
                    <li><img style={{"filter": "none"}} src="images/CHV Logo2.jpg"/></li>
            	</ul>
	
            	<menu id="share">
            	    <li id="facebook"><a href="https://www.facebook.com/Freedom-from-FB-1199263703543699/" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
            		<li id="twitter"><a href="https://twitter.com/FacebookBreakup" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
            		<li id="instagram"><a href="https://www.instagram.com/facebookbreakup/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
            	</menu>
	
                <menu id="footer">
                    <li><a href="https://demandprogress.org/privacy-policy/">Our privacy policy</a></li>
                </menu>

            	<div className="press-link">
            		<p>For press inquiries, please contact us at: 202-681-7582 or <a href="mailto:press@demandprogress.org">press@demandprogress.org</a></p>
            	</div>
            </footer>
        );
    }
    
}

export default Footer;