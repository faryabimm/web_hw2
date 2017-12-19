import React from 'react'

import NavbarItem from "../NavbarItem/NavbarItem";


class FloatingNavbar extends React.Component {

    render() {
        return (
            <div id="floating_navbar" style={{display: 'none'}}>

                <div className={'firebase_topbar_floating'}>
                    <button className={'firebase_topbar_topleft_logo'}>
                        <div className={'flex-row-container'}>
                            <img src={require('../../Images/firebase_logo.png')} className={'logo_picture'} />
                            <h1 className={'logo_name_floating'}>Firebase</h1>
                        </div>
                    </button>
                </div>
                <div className={'firebase_left_nav'}>
                    <div id="scrollable3">
                        <div className={'left_nav_header'}>
                            <div className={'left_nav_header_modifier'}>
                                <div className={'navbar_item'}>
                                    <i className={'mdi mdi-home'} />
                                    <h1 className={'left_nav_header_overview_modifier'}>Overview</h1>
                                </div>
                                <div className={'navbar_item'} id="settings3">
                                    <i className={'mdi mdi-settings'} />
                                </div>
                            </div>

                        </div>

                        <NavbarItem icon={'mdi mdi-google-analytics'} text={'Analytics'} />


                        <div className={'navbar_label'}>
                            develop
                        </div>

                        <NavbarItem icon={'mdi mdi-account-multiple'} text={'Authentication'} />
                        <NavbarItem icon={'mdi mdi-dns'} text={'Database'} />
                        <NavbarItem icon={'mdi mdi-folder-image'} text={'Storage'} />
                        <NavbarItem icon={'mdi mdi-earth'} text={'Hosting'} />
                        <NavbarItem icon={'mdi mdi-json'} text={'Functions'} />
                        <NavbarItem icon={'mdi mdi-checkbox-marked-outline'} text={'Test Lab'} />
                        <NavbarItem icon={'mdi mdi-bug'} text={'Crash Reporting'} />
                        <NavbarItem icon={'mdi mdi-gauge'} text={'Performance'} />


                        <div className={'navbar_label'}>
                            grow
                        </div>

                        <NavbarItem icon={'mdi mdi-message-bulleted'} text={'Notification'} />
                        <NavbarItem icon={'mdi mdi-source-branch'} text={'Remote Config'} />
                        <NavbarItem icon={'mdi mdi-link'} text={'Dynamic Links'} />


                        <div className={'navbar_label'}>
                            earn
                        </div>


                        <NavbarItem icon={'mdi mdi-case-sensitive-alt'} text={'AdMob'} />


                        </div>
                    </div>
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
                </div>
        );
    }

}



export default FloatingNavbar;