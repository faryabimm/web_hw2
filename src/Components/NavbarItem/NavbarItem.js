import React from 'react'


class NavbarItem extends React.Component{

    render() {
        return (
            <div className={'navbar_item'}>
                <i className={this.props.icon} />
                <span>{this.props.text}</span>
            </div>
        );
    }
}


export default NavbarItem;


