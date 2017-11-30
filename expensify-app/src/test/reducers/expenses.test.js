import expensesReducers from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should setup default expenses values', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' })

    expect(state).toEqual([])
})


test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducers(expenses, action)

    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '11'
    }

    const state = expensesReducers(expenses, action)

    expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
    const expense = {
        id: 4,
        description: 'Water',
        note: '',
        amount: 6.95,
        createdAt: 0
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducers(expenses, action)

    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
    const amount = 122000

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducers(expenses, action)
    expect(state[1].amount).toEqual(amount)
})

test('Should not edit an expense if expense not found', () => {
    const amount = 122000

    const action = {
        type: 'EDIT_EXPENSE',
        id: '11',
        updates: {
            amount
        }
    }
    const state = expensesReducers(expenses, action)
    expect(state).toEqual(expenses)
})
