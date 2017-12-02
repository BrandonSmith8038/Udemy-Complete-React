import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'
import toJSON from 'enzyme-to-json'

let startLogout, wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(
    <Header
      startLogout={startLogout}
    />
  );
});


test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />)

    expect(toJSON(wrapper)).toMatchSnapshot()

})

test('Should call startLogout on button click', () => {

    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()

})
