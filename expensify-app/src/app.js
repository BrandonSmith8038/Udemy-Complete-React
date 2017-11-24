import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter, sortByAmount } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'



const store = configureStore()


store.dispatch(addExpense({ description: 'Water Bill', amount: 500, createdAt: 21000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 60000, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Internet Bill', amount: 25, createdAt: 3000 }))

/*console.log(store.getState())

store.dispatch(setTextFilter('water'))
store.dispatch(sortByAmount())

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000)*/


const state = store.getState()
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters)



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
