import { createStore, combineReducers } from 'redux'


//Expenses Reducers

const expensesReducerDefaultState = []

const expensesReducer = (state = [expensesReducerDefaultState], action) => {
  switch(action.type){
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

console.log(store.getState())


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

