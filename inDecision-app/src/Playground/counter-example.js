let count = 0
const addOne = () => {
    count++
    renderCounterApp();
}

const minusOne = () => {
    count--
    renderCounterApp();
}

const reset = () => {
    count = 0
    renderCounterApp();
}




const renderCounterApp = () => {
    const template2 = (
        <div>
        <h1>Count: {count}</h1>
            <button className="btn btn-primary m-3" onClick={addOne}>+1</button>
            <button className="btn btn-primary m-3" onClick={reset}>Reset</button>
            <button className="btn btn-primary m-3" onClick={minusOne}>-1</button>
        </div>
    )

    ReactDOM.render(template2, appRoot)

}

renderCounterApp();
