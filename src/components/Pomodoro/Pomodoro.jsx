import React, { Component } from 'react'
import './Pomodoro.css'
import soundFile from '../../assets/alarm.mp3';

export class Pomodoro extends Component {

    // state 
    constructor(props) {
        super(props)
        this.state = {
            mode: 'work',
            minutes: this.props.workTime,
            seconds: 0,
            isTimerStart: true,
            isPaused: false,
            isTimerOver: false
        }

        this.alarm = new Audio(soundFile)
    }
    

    componentDidMount() {
        // starting timer as soon as <Pomodoro/> component mounts
        this.startTimer()
    }

    componentDidUpdate() {
        // updates the timer
        this.startTimer()

        const { mode, isTimerOver } = this.state

        // check if timer is not running
        if (isTimerOver) {
            this.alarm.play()
            alert(`${mode} time is over`)
            this.stopAlarm()
            // set mode to lunch if mode == 'work' and vice-versa, satrt and respective timer
            if (mode === 'work') {
                this.setState(() => ({
                    mode: 'lunch',
                    minutes: this.props.lunchTime,
                    isTimerStart: true,
                    isTimerOver: false
                }))
            } else {
                this.setState(() => ({
                    mode: 'work',
                    minutes: this.props.workTime,
                    isTimerStart: true,
                    isTimerOver: false
                }))
            }
        }
    }

    componentWillUnmount() {
        // removing timer as component unmounts
        clearTimeout(this.timer)
    }

    startTimer = () => {
        // start the timer clock and update
        if (this.state.isTimerStart) {
            this.timer = setTimeout(() => {
                if (this.state.minutes >= 0 && this.state.seconds > 0 && this.state.seconds <= 59) {
                    this.setState({ seconds: this.state.seconds - 1 })
                } else if (this.state.seconds === 0 && this.state.minutes > 0) {
                    this.setState({ minutes: this.state.minutes - 1, seconds: 59 })
                } else {
                    this.setState({ isTimerOver: true, isTimerStart: false })
                }
            }, 1000)
        }
    }

    

    // function to pause the timer
    handlePause = () => {
        this.setState(() => ({
            isTimerStart: false,
            isPaused: true
        }))
    }

    // function to restart timer from mode work and initial timer count
    handleRestart = () => {
        this.setState(() => ({
            mode: 'work',
            minutes: this.props.workTime,
            seconds: 0,
            isTimerStart: true,
            isTimerOver: false,
            isPaused: false
        }))
    }

    // stop the alarm ringtone - pause it and set the seek to start of track
    stopAlarm = () => {
        this.alarm.pause()
        this.alarm.currentTime = 0
    }

    render() {
        return (
            <div className='pomodoro'>
                {/* <audio ref={alarm => this.alarm = alarm} src={require('../../assets/alarm.mp3')}></audio> */}
                <h2 className="pomodoro__title">{this.props.taskName}</h2>
                <div className="pomodoro__clock">
                    <div className="pomodoro__clock__text">{this.state.minutes}
                        <span className="pomodoro__clock__text__small">{`: ${this.state.seconds}`}</span>
                    </div>
                </div>
                <div className="pomodoro__actions">
                    {
                        !this.state.isPaused
                            ? <button className="btn" onPointerDown={this.handlePause}>Pause</button>
                            : <div className="pomodoro__actions--updated">
                                <button className="btn" onPointerDown={this.handleRestart}>Restart</button>
                                <button className="btn" onPointerDown={this.props.onStop}>Stop</button>
                            </div>
                    }

                </div>
            </div>
        )
    }
}

export default Pomodoro