const app = {
    title: 'My inDecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    e.persist()

    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''

    }
    appRender()
}

const removeAll = () => {
    app.options = []
    appRender()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const selectedOption = app.options[randomNum]

    console.log(selectedOption)
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000]

const appRender = () => {
    const template = (

        <div>
    <h1 className="mt-4">{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <button className="btn btn-dark mr-2" disabled={app.options.length < 1} onClick={makeDecision}>What Should I Do</button>
    <button className="btn btn-dark" disabled={app.options.length < 1} onClick={removeAll}>Remove All</button>
    <ol className="list-group mt-5">
        {
            app.options.map((option) => {
                return <li className="list-group-item" key={option}>{option}</li>
            })
        }
    </ol>
    <form className="form-inline mt-2"onSubmit={onFormSubmit}>
        <div className="form-group">
        <input className="form-control" type="text" name="option" />
        <button className="btn btn-dark">Add Option</button>
        </div>
      </form>
</div>
    )




    ReactDOM.render(template, appRoot)
}

appRender()
