import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('Should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)

    expect(wrapper).toMatchSnapshot()
})

test('Should render expense form with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)

    expect(wrapper).toMatchSnapshot()
})