class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            visibility: false
        }
    }

    handleClick() {

        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {


        return (
            <div>
                <h1 className="mb-3">Visibility Toggle</h1>
                <button className="btn mb-3" onClick={this.handleClick}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                <p>{this.state.visibility ? "These are some awesome details" : ""}</p>
            </div>
        )
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


/*const app = {
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

appRender()*/
