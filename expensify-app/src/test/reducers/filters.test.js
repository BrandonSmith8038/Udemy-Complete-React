import filtersReducers from '../../reducers/filters'
import moment from 'moment'


test('Should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' })

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})

test('Should set sortBy to amout', () => {
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' })

    expect(state.sortBy).toEqual('amount')
})

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }

    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducers(currentState, action)

    expect(state.sortBy).toEqual('date')
})

test('Should set text filter to provide value', () => {
    const text = 'This is my filter'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }

    const state = filtersReducers(undefined, action)

    expect(state).toEqual({
        text: action.text,
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})
test('Should set start date filter to provide value', () => {
    const startDate = moment().startOf('month')
    const action = {
        type: 'SET_TEXT_FILTER',
        startDate
    }

    const state = filtersReducers(undefined, action)

    expect(state).toEqual({
        text: undefined,
        sortBy: 'date',
        startDate,
        endDate: moment().endOf('month'),
    })
})

test('Should set end date filter to provide value', () => {
    const endDate = moment().endOf('month')
    const action = {
        type: 'SET_TEXT_FILTER',
        endDate
    }

    const state = filtersReducers(undefined, action)

    expect(state).toEqual({
        text: undefined,
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate
    })
})
