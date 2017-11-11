const app = {
    title: 'Visibility Toggle',
    details: '',
    showHide: 'Show Details'
}

const showHideDetails = () => {
    app.details ? app.details = '' : app.details = 'These are the details'
    app.details ? app.showHide = 'Hide Details' : app.showHide = 'Show Details'

    appRender()
}

const appRender = () => {
    const template = (

        <div>
        <h1>{app.title}</h1>
        <button className="btn btn-primary" onClick={showHideDetails}>{app.showHide}</button>
        <p className="mt-5">{app.details}</p>
    </div>


    )

    const appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot)

}

appRender()
