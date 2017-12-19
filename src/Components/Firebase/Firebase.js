import React from 'react'

import '../Floating_navbar/FloatingNavbar'
import '../LargeNavbar/LargeNavbar'


import FloatingNavbar from "../Floating_navbar/FloatingNavbar";
import LargeNavbar from '../LargeNavbar/LargeNavbar'
import SmallNavbar from '../SmallNavbar/SmallNavbar'
import Dashboard from "../Dashboard/Dashboard";
import NavbarOveraly from "../NavbarOveraly/NavbarOveraly";
import Topbar from "../Topbar/Topbar";

class Application extends React.Component {

    render() {
        return (
            <div>
                <NavbarOveraly/>
                <FloatingNavbar/>
                <div className={'flex-col-container'}>
                    <Topbar/>
                    <div className={'flex-row-container'}>
                        <LargeNavbar/>
                        <SmallNavbar/>
                        <Dashboard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;