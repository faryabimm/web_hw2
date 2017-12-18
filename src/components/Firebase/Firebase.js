import React from 'react'
import TripleClock from '../TripleClock/TripleClock'
import App from '../App/App'

class Application extends React.Component {

    render() {
        return (
            <div className="Application">
                <App/>
                <TripleClock/>
            </div>
        );
    }
}

export default Application;