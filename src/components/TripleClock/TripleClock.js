import React from 'react'
import Clock from '../Clock/Clock'

class TripleClock extends React.Component {
    render() {
        return (
            <div>
                <Clock />
                <Clock />
                <Clock />
            </div>
        );
    }
}


export default TripleClock;