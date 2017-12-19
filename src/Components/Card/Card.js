import React from 'react';


export default class Card extends React.Component {
    render() {

        return (
            <div className={'dash_card'}>
                <div className={'flex-col-container'}>
                    <img src={this.props.image}/>
                    <div className={'card_body'}>
                        <div className={'card_title'}>
                            {this.props.title}
                        </div>
                        <div className={'card_description'}>
                            {this.props.description}
                        </div>

                    </div>
                    <div className={'card_footer'}>
                        <a href="#">Learn more</a>
                        <div className={'upgrade_button'}>
                            Get started
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}