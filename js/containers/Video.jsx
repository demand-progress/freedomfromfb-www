import React from 'react'

// class Video extends Component {
//    return (
//        <div>
//     <iframe width="560" height="315" src="https://www.youtube.com/embed/WaQewDoipQQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//     </div>
//    )
// }

const Video = () => {
    return (
        <div id="video">
            <h4 style={{color: 'white'}}>Mark Ruffalo explains the crisis in Yemen:</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WaQewDoipQQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p>This video was originally made to advocate for the Senate War Powers Resolution, earlier in 2018. General principles and facts remain the same.</p>
            <div id="share-button-container">
                <div className="social-media">
                    <div className="button-share">
                        <a className="twitter" href="https://twitter.com/intent/tweet?text=Our%20public%20dollars%20are%20fueling%20the%20worst%20humanitarian%20crisis%20on%20the%20globe.%20It%27s%20up%20to%20us%20to%20stop%20it.%20Urge%20Congress%20to%20pass%20war%20powers%20resolution%20and%20cut%20off%20U.S.%20support%20for%20Saudi%20Arabia%27s%20brutal%20war%20in%20%23Yemen.%20www.Stopthewar.us" target="_blank">
                            <img src="images/twitter_white.svg" />
                            <span>Share on twitter</span>
                        </a>
                    </div>
                    <div className="button-share">
                        <a className="facebook" href="https://www.facebook.com/sharer.php?u=https://stopthewar.us/" target="_blank">
                            <img src="images/facebook_white.svg" />
                            <span>Share on facebook</span>
                        </a>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Video