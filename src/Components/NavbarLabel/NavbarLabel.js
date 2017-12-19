import React from 'react'


export default class NavbarLabel extends React.Component {
    render () {
        return (
            <div className={'navbar_label'}>
                {this.props.title}
            </div>
        );
    }
}