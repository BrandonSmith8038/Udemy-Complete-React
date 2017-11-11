const app = {
    title: 'My inDecision App',
    subtitle: 'The Best App Eva',
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

const appRoot = document.getElementById('app');

const appRender = () => {
    const template = (

        <div>
    <h1 className="mt-4">{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <p>{app.options.length}</p>
    <button className="btn btn-dark" onClick={removeAll}>Remove All</button>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
    </ol>
    <form className="form-inline"onSubmit={onFormSubmit}>
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
