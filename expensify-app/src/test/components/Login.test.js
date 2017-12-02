import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '../../components/Login'

test('Should correctly render Login', () => {
    const wrapper = shallow(<Login />)

    expect(wrapper).toMatchSnapshot()
})
