import React from 'react'



export default class Topbar extends React.Component {
    render () {
        return (
            <div className={'firebase_topbar'} id="static_topbar">
                <button className={'firebase_topbar_topleft_logo'}>
                    <div className={'flex-row-container'}>
                        <img className={'logo_picture'} src={require('../../Images/firebase_logo.png')} />
                        <i className={'material-icons-2 hamburger-logo'} onclick="show_floating_navbar()">menu</i>
                        <h1 className={'logo_name'}>Firebase</h1>
                    </div>
                </button>

                <div className={'first_dropdown'}>
                    <button onclick="show_left_dropdown()" className={'first_dropdown_button'}>
                        <div className={'flex-row-container'}>
                            <h1 className={'first_dropdown_button_name'}>first</h1>
                            <h1 className={'arrow_down'}>&#9660;</h1>
                        </div>
                    </button>
                    <div id="left_dropdown" className={'w3-dropdown-content w3-bar-block w3-border'}>
                        <div className={'w3-bar-item dropdown_div'}>
                            <a href="#" className={'w3-bar-item w3-button'} style={{'background-color': '#EEEEEE'}}>See all projects</a>
                            <a href="#" className={'w3-bar-item w3-button'}>Create new project</a>
                            <a href="#" className={'w3-bar-item w3-button'}>Import Google project</a>
                        </div>
                        <div className={'w3-bar-item dropdown_div'}>
                            <a href="#" className={'w3-bar-item w3-button'}>Recent</a>
                            <a href="#" className={'w3-bar-item w3-button'}>first</a>
                        </div>
                        <div className={'w3-bar-item dropdown_div'}>
                        </div>
                    </div>
                </div>

                <div className={'second_right_buttons'}>
                    <button className={'first_dropdown_button view-only'}>
                        <i className={'mdi mdi-eye'} style={{'font-size': 16 + 'px'}} />
                        View only
                    </button>
                    <button className={'first_dropdown_button'}>
                        <div className={'Go_to_docs'}>Go to docs</div>
                    </button>
                    <button className={'first_dropdown_button'} onclick="show_right_dropdown()">
                        <i className={'material-icons three_points'}>more_vert</i>
                    </button>
                    <div id="right_dropdown" className={'w3-dropdown-content w3-bar-block w3-border'} style={{'border-radius': 3 + 'px'}}>
                        <div className={'w3-bar-item dropdown_div'}>
                            <a href="#" className={'w3-bar-item w3-button'}>Firebase docs&nbsp;&nbsp;&nbsp;
                                <i className={'mdi mdi-open-in-new'} style={{'font-size': 15 + 'px', color: '#888888'}} />
                            </a>
                        </div>
                        <div className={'w3-bar-item dropdown_div'}>
                            <a href="#" className={'w3-bar-item w3-button'}>Alert subscriptions</a>
                        </div>
                    </div>
                    <button className={'first_dropdown_button'}>
                        <svg className={'user_image'} height="100" width="100">
                            <circle cx="16" cy="16" r="16" fill="#9E3DB5">
                            </circle>
                            <text x="50%" y="50%" text-anchor="middle" stroke="white" fill="white" dy=".3em" font-size="14fpx">
                                O
                            </text>
                        </svg>

                    </button>
                </div>
            </div>
        );
    }
}