import React from 'react'
import {shallow} from 'enzyme'
import Pomodoro from '../../components/Pomodoro/Pomodoro'

describe('<Pomodoro/> tests', () => {
    let mountedPomodoro
    beforeEach(() => {
        mountedPomodoro = shallow(<Pomodoro/>)
    })

    it('renders pomodoro component without crash', () => {
        mountedPomodoro
    })

    it('consists of 3 buttons', () => {
        const buttonsCount = mountedPomodoro.find('button')
        expect(buttonsCount.length).toEqual(3)
    })
})