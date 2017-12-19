import React from 'react'

import OverviewBar from "../OverviewBar/OverviewBar";
import WelcomeCard from "../WelcomeCard/WelcomeCard";
import CardHolder from "../CardHolder/CardHolder";

class PrivacyPolicy extends React.Component {
    render() {
        return (
            <div className={"terms-privacy"}>
                <a>Terms</a>
                &nbsp;·&nbsp;
                <a>Privacy Policy</a>
            </div>
        );
    }
}

class DiscoverFireBase extends React.Component {
    render() {
        return (
            <div className={'discover_firebase'}>
                <a>Discover Firebase</a>
            </div>
        );
    }
}

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className={'firebase_dash'} id="dashboard" style={{height: (window.innerHeight-48) + 'px'}}>
                <div className={'flex-col-container'}>

                    <OverviewBar/>
                    <WelcomeCard/>
                    <div className={'dashboard'}>

                        <DiscoverFireBase/>
                        <CardHolder/>
                        <PrivacyPolicy/>

                    </div>

                </div>
            </div>
        );
    }
}
