import React, { Component } from 'react'; 
import { TwitterTimelineEmbed } from 'react-twitter-embed';
class Tweet extends  Component { 
    render(){
        return (
            <section id="tweets">
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="facebookbreakup"
                  noHeader
                  noFooter
                  noBorders
                  options={{height: 768 }}
                />
            </section>
        );
    }
}
export default Tweet;