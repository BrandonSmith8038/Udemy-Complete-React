import {
	createStore
} from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
})

const setCount = ({ count } = {}) => ({
	type: 'SET',
	count
})

const resetCount = () => ({
	type: 'RESET'
})

const store = createStore((state = {
	count: 0
}, action) => {

	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			}
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
			return {
				count: state.count - decrementBy
			}
		case 'SET':
			return {
				count: action.count
			}
		case 'RESET':
			return {
				count: 0
			}
		default:
			return state;
	}
})

const unsubscribe = store.subscribe(() => {
	console.log(store.getState())
})


console.log('Start at 0 add 5',store.dispatch(incrementCount({ incrementBy: 5 })))

console.log('Add default(1)',store.dispatch(incrementCount()))

console.log('Subtract default(1)',store.dispatch(decrementCount()))

console.log('Subtract 10',store.dispatch(decrementCount({decrementBy: 10})))

console.log('Reset Back To Zero',store.dispatch(resetCount()))

console.log('Set To 400',store.dispatch(setCount({count: 400})))