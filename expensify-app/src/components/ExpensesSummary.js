import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';

  const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Currently Viewing <span>{expenseCount}</span> {expenseWord} totaling{' '}
          <span>{formatedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button button--create" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibileExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibileExpenses.length,
    expensesTotal: selectExpenseTotal(visibileExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
