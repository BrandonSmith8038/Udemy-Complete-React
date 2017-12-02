import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should render ExpensesSummary with singular expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );

  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with plural expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={2} expensesTotal={5325452345} />
  );

  expect(wrapper).toMatchSnapshot();
});
