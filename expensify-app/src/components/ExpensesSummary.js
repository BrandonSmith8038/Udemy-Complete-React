import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total'



export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'

    const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
        <div>
            <h1>Currently Viewing {expenseCount} {expenseWord} totaling {formatedExpensesTotal}</h1>
        </div>
    )
};

const mapStateToProps = state => {

    const visibileExpenses =  selectExpenses(state.expenses, state.filters)

    return{
        expenseCount: visibileExpenses.length,
        expensesTotal: selectExpenseTotal(visibileExpenses)

    }


};

export default connect(mapStateToProps)(ExpensesSummary);