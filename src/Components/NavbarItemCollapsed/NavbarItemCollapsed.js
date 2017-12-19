import React from 'react'


class NavbarItemCollapsed extends React.Component{

    render() {
        return (
            <div className={'navbar_item'}>
                <i className={this.props.icon} />
            </div>
        );
    }
}


export default NavbarItemCollapsed;


