import React from 'react'
import {shallow} from 'enzyme'
import App from '../../App'

describe('<App /> shallow tests', () => {
    let mountedApp
    beforeEach(() => {
        mountedApp = shallow(<App/>)
    })

    it('App renders without crashing', () => {
        mountedApp
    })

    it('App consists of a home page', () => {
        const home = mountedApp.find('Home')
        expect(home.length).toBe(1)
    })
})