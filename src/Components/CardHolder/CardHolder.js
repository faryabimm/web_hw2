import React from 'react';
import Card from "../Card/Card";


export default class CardHolder extends React.Component {
    render() {
        return (
            <div className={'card_holder'}>

                <Card image={require('../../Images/tile_01.png')} title={'Analytics'}
                      description={'Get detailed analytics to measure and analyze how users engage with your app'}/>


                <Card image={require('../../Images/tile_02.png')} title={'Authentication'}
                      description={'Authenticate and manage users from a variety of providers without server-side code'}/>


                <Card image={require('../../Images/tile_03.png')} title={'Database'}
                      description={'Store and sync data in realtime across all connected clients'}/>


                <Card image={require('../../Images/tile_04.png')} title={'Storage'}
                      description={'Store and retrieve user generated content like images, audio, and video without server-side code'}/>


                <Card image={require('../../Images/tile_05.png')} title={'Hosting'}
                      description={'Deploy web and mobile web apps in seconds using a secure global content delivery network'}/>


                <Card image={require('../../Images/tile_06.png')} title={'Cloud Functions'}
                      description={'Run managed backend code for your mobile app that extends and connects Firebase features'}/>


                <Card image={require('../../Images/tile_07.png')} title={'Test Lab'}
                      description={'Test your Android apps against a wide range of devices'}/>


                <Card image={require('../../Images/tile_08.png')} title={'Crash Reporting'}
                      description={'Get actionable insights and comprehensive analytics whenever your app crashes or stops working'}/>


                <Card image={require('../../Images/tile_09.png')} title={'Notifications'}
                      description={'Manage notification campaigns and send messages to engage the right users at the right moment'}/>


                <Card image={require('../../Images/tile_10.png')} title={'Remote Config'}
                      description={'Customize and experiment with app behavior using server-side configuration parameters'}/>


                <Card image={require('../../Images/tile_11.png')} title={'Dynamic Links'}
                      description={'Send users to the right place in your app whether or not it is already installed'}/>


                <Card image={require('../../Images/tile_12.png')} title={'AdMob'}
                      description={'Earn more from your apps the smart way by showing ads from millions of Google advertisers'}/>


                <Card image={require('../../Images/tile_13.png')} title={'Cloud Messaging'}
                      description={'Send and receive messages reliably across platforms'}/>


                <Card image={require('../../Images/tile_14.png')} title={'AdWords'}
                      description={'Drive installs, gain deep insights into your conversions and run targeted campaigns to engage your userbase'}/>


                <Card image={require('../../Images/tile_15.png')} title={'App Indexing'}
                      description={'Drive organic search traffic to your app'}/>


                <div style={{clear: 'both'}}/>

            </div>
        );
    }
}

