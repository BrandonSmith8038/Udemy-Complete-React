import { createStore } from 'redux'



const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
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




store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})


store.dispatch({
    type: 'INCREMENT',

})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 4
})

store.dispatch({
    type: 'DECREMENT'
})


// I'd like to reset the count to zero
store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'SET',
    count: 1000
})