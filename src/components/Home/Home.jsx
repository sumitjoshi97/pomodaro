import React, { Component } from 'react'
import Pomodoro from '../Pomodoro/Pomodoro'
import './Home.css'

class Home extends Component {
  state = {
    task: '',
    work: '',
    lunch: '',
    renderPomodoro: false
  }

  // function to handle change in Input
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // function to toggle Pomodoro Component render
  togglePomodoro = () => {
    this.setState({ renderPomodoro: !this.state.renderPomodoro })
  }

  render() {

    // renders home component
    let renderView = (
      <div className='home'>
        <div className='home__input-group'>
          <label className='home__input-group__label' htmlFor="task-name">Enter task : </label>
          <input className='home__input-group__input' name='task' onChange={this.handleInput} type="text" />
        </div>
        <div className='home__input-group'>
          <label className='home__input-group__label' htmlFor="work-time">Time for work (in minutes):</label>
          <input className='home__input-group__input' name='work' onChange={this.handleInput} type="text" />
        </div>
        <div className='home__input-group'>
          <label className='home__input-group__label' htmlFor="break-time">Time for break (in minutes):</label>
          <input className='home__input-group__input' name='lunch' onChange={this.handleInput} type="text" />
        </div>
        <button className='home__submit btn' onPointerDown={this.togglePomodoro}>Submit</button>
      </div>
    )

    // renders pomodoro component if state.renderPomodoro is true
    if (this.state.renderPomodoro) {
      renderView = <Pomodoro onStop={this.togglePomodoro} />
    }

    return renderView
  }
}

export default Home