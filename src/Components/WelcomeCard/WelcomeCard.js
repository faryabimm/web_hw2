import React from 'react';


export default class WelcomeCard extends React.Component {
    render() {
        return (
            <div className={'welcome_card'}>
                <div className={'flex-col-container'}>
                    <a>Welcome to Firebase! Get started here.</a>
                </div>
                <div className={'flex-row-container'}>
                    <div className={'card'}>
                        <div className={'flex-col-container'}>
                            <img src={require('../../Images/ios_circ.png')}/>
                            <a className={'card_item_label'}>Add Firebase to<br/>your iOS app</a>
                        </div>
                    </div>
                    <div className={'card'}>
                        <div className={'flex-col-container'}>
                            <img src={require('../../Images/android_circ.png')}/>
                            <a className={'card_item_label'}>Add Firebase to<br/>your Android app</a>
                        </div>
                    </div>
                    <div className={'card'}>
                        <div className={'flex-col-container'}>
                            <img src={require('../../Images/web_circ.png')}/>
                            <a className={'card_item_label'}>Add Firebase to<br/>your web app</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
