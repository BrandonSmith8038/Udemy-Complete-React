import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


//ADD_EXPENSE
const addExpense = (
  { description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE



//Expenses Reducers

const expensesReducerDefaultState = []

const expensesReducer = (state = [expensesReducerDefaultState], action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}


const filterReducerDefaultState= {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}

const filtersReducers = (state = filterReducerDefaultState, action) => {
  switch(action.type){
    default:
      return state
  }
}

// Store Creation

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filter: filtersReducers
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Used For Dev Tools
)

store.subscribe(() => {
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 500}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 5}))
const expenseThree = store.dispatch(addExpense({ description: 'Cable', amount: 100}))

store.dispatch(removeExpense({ id: expenseTwo.expense.id }))


const demo = {
  expenses: [{
    id: 'ksfksfsfsa',
    description: 'January Rent',
    note: 'This was the final the payment for that address',
    amount: 5400,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

