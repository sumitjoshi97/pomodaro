import React, { Component } from 'react'

export class Pomodoro extends Component {

    handlStart = () => {

    }

    handleRestart = () => {

    }

    handleStop = () => {

    }
    render() {
        return (
            <div className='pomodoro'>
                <div className="pomodoro__clock"></div>

                <div className="pomodoro__actions">
                    <button className="btn">Restart</button>
                    
                    <button className="btn">Start</button>
                    
                    <button className="btn" onPointerDown={this.props.onStop}>Stop</button>
                </div>
            </div>
        )
    }
}

export default Pomodoro