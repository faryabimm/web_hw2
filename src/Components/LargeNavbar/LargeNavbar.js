import React from 'react'
import NavbarItem from "../NavbarItem/NavbarItem";
import NavbarLabel from "../NavbarLabel/NavbarLabel";


class LeftNavHeader extends React.Component {
    render() {
        return (
            <div className={'left_nav_header'}>
                <div className={'left_nav_header_modifier'}>
                    <div className={'navbar_item'}>
                        <i className={'mdi mdi-home'}/>
                        <h1 className={'left_nav_header_overview_modifier'}>Overview</h1>
                    </div>
                    <div className={'navbar_item'} id="settings">
                        <i className={'mdi mdi-settings'}/>
                    </div>
                </div>

            </div>
        );
    }
}

class LeftNavFooter extends React.Component {
    render() {
        return (
            <div className={'left_nav_footer'}>
                <div className={'spark'}>
                    <div className={'flex-row-container'}>
                        <div className={'spark_container'}>
                            <div className={'flex-col-container'}>
                                <div className={'top_label'}>
                                    Spark
                                </div>
                                <div className={'bottom_label'}>
                                    Free $0/month
                                </div>
                            </div>
                        </div>
                        <div className={'upgrade_button'}>
                            upgrade
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

var showLargeNav = true;

class Sidebar_collapse_button extends React.Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        console.log('salam');
    }

    onClick(e) {
        e.preventDefault();
        showLargeNav = !showLargeNav;
        console.log(showLargeNav);
    }

    render() {
        return (
            <button class={'sidebar_collapse'}>
                <i class={'mdi mdi-chevron-left'}></i>
            </button>
        )
    }
}

export default class LargeNavbar extends React.Component {

    render() {
        if (showLargeNav) {
            return (
                <div className={'flex-col-container z-index-modifier'} id="large_navbar ">
                    <div className={'firebase_left_nav'}>
                        <div id="scrollable1" style={{height: (window.innerHeight - 154) + 'px'}}>
                            <LeftNavHeader/>

                            <NavbarItem icon='mdi mdi-google-analytics' text='Analytics'/>

                            <NavbarLabel title='develop'/>

                            <NavbarItem icon='mdi mdi-account-multiple' text='Authentication'/>
                            <NavbarItem icon='mdi mdi-dns' text='Database'/>
                            <NavbarItem icon='mdi mdi-folder-image' text='Storage'/>
                            <NavbarItem icon='mdi mdi-earth' text='Hosting'/>
                            <NavbarItem icon='mdi mdi-json' text='Functions'/>
                            <NavbarItem icon='mdi mdi-checkbox-marked-outline' text='Test Lab'/>
                            <NavbarItem icon='mdi mdi-bug' text='Crash Reporting'/>
                            <NavbarItem icon='mdi mdi-gauge' text='Performance'/>

                            <NavbarLabel title='grow'/>

                            <NavbarItem icon='mdi mdi-message-bulleted' text='Notification'/>
                            <NavbarItem icon='mdi mdi-source-branch' text='Remote Config'/>
                            <NavbarItem icon='mdi mdi-link' text='Dynamic Links'/>

                            <NavbarLabel title='earn'/>

                            <NavbarItem icon='mdi mdi-case-sensitive-alt' text='AdMob'/>


                        </div>
                        <LeftNavFooter/>

                        <Sidebar_collapse_button onClick={() => click_large_collapse()}/>
                    </div>

                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

function click_large_collapse() {
    showLargeNav=!showLargeNav;
}