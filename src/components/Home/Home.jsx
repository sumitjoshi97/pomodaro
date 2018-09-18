import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  state = {
    task: '',
    work: '',
    lunch: ''
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  
  render() {
    return (
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
        <button className='home__submit btn'>Submit</button>
      </div>
    )
  }
}

export default Home