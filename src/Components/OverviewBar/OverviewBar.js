import React from 'react';


export default class OverviewBar extends React.Component {
    render() {
        return (
            <div className={'overview_bar'}>
                <h1 className={'Overview_word'}>Overview</h1>

                <div className={'second_right_buttons'}>
                    <div className={'help_button'}>
                        <i className={'mdi mdi-help-circle'} />
                    </div>
                </div>

            </div>
        );
    }
}
