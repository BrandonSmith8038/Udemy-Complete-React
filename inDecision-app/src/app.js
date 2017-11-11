const app = {
    title: 'My inDecision App',
    subtitle: 'The Best App Eva',
    options: ['Option One', 'Option Two']
}

const template = (

    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
    </ol>
</div>
)


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


const appRoot = document.getElementById('app');

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
