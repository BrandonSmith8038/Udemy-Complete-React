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
