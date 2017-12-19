import React from 'react'


import NavbarItemCollapsed from "../NavbarItemCollapsed/NavbarItemCollapsed";

class NavbarSeperator extends React.Component {
    render() {
        return (
            <div className={'navbar_separator'}/>
        );
    }
}

class SidebarReveal extends React.Component {
    render() {
        return (
            <button className={'sidebar_collapse'} onClick={() => alert('NOT IMPLEMENTED YET')}>
                <i className={'mdi mdi-chevron-right'}/>
            </button>
        );
    }
}

class LeftNavHeader extends React.Component {
    render() {
        return (
            <div className={'left_nav_header'}>

                <NavbarItemCollapsed icon='mdi mdi-home'/>
                <div className={'navbar_item'} id="settings2">
                    <i className={'mdi mdi-settings'}/>
                </div>
            </div>
        );
    }
}


export default class SmallNavbar extends React.Component {
    render() {
        return (
            <div className={'flex-col-container'} style={{display: 'none'}} id="small_navbar">
                <div className={'firebase_left_nav_collapsed'}>
                    <div id="scrollable2" style={{height: (window.innerHeight - 93) + 'px'}}>

                        <LeftNavHeader/>
                        <NavbarItemCollapsed icon='mdi mdi-google-analytics'/>

                        <NavbarSeperator/>

                        <NavbarItemCollapsed icon='mdi mdi-account-multiple'/>
                        <NavbarItemCollapsed icon='mdi mdi-dns'/>
                        <NavbarItemCollapsed icon='mdi mdi-folder-image'/>
                        <NavbarItemCollapsed icon='mdi mdi-earth'/>
                        <NavbarItemCollapsed icon='mdi mdi-json'/>
                        <NavbarItemCollapsed icon='mdi mdi-checkbox-marked-outline'/>
                        <NavbarItemCollapsed icon='mdi mdi-bug'/>
                        <NavbarItemCollapsed icon='mdi mdi-gauge'/>

                        <NavbarSeperator/>

                        <NavbarItemCollapsed icon='mdi mdi-message-bulleted'/>
                        <NavbarItemCollapsed icon='mdi mdi-source-branch'/>
                        <NavbarItemCollapsed icon='mdi mdi-link'/>

                        <NavbarSeperator/>

                        <NavbarItemCollapsed icon='mdi mdi-case-sensitive-alt'/>


                    </div>
                    <div className={'left_nav_footer'}/>
                    <SidebarReveal/>
                </div>
            </div>
        );
    }
}