import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../components/Home/Home'

describe('<Home/> component tests', () => {
    let mountedHome

    beforeEach(() => {
        mountedHome = shallow(<Home />)
    })

    it('Home renders without crash', () => {
        mountedHome
    })

    it('Home consists of 3 inputs', () => {
        const inputCount = mountedHome.find('input')
        expect(inputCount.length).toEqual(3)
    })

    it('Home consists of 3 labels', () => {
        const inputCount = mountedHome.find('label')
        expect(inputCount.length).toEqual(3)
    })
    
    it('Home consists of 1 button', () => {
        const inputCount = mountedHome.find('button')
        expect(inputCount.length).toEqual(1)
    })
})