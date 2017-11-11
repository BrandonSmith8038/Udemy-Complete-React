const appRoot = document.getElementById('app');

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
    console.log('Add One')
}

const minusOne = () => {
    console.log('Minus One')
}

const reset = () => {
    console.log('Reset')
}
const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={minusOne}>-1</button>
    </div>
)
console.log(template2)
ReactDOM.render(template2, appRoot)
