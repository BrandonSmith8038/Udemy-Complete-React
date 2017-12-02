import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '../../components/Login'

let startLogin, wrapper;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(
    <Login
      startLogin={startLogin}
    />
  );
});

test('Should correctly render Login', () => {
    const wrapper = shallow(<Login />)

    expect(wrapper).toMatchSnapshot()
})

test('Should call startLogin on button click', () => {

    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()

})