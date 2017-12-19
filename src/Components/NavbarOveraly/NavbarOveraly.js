import React from 'react';


export default class NavbarOveraly extends React.Component {

    render() {
        return (
            <div id="navbar_overlay" onclick="show_floating_navbar()" style={{display: 'none'}} />
        );
    }
}