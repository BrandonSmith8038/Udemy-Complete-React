class InDecisionApp extends React.Component {

    constructor(props) {
        super(props)

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)

        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        }
        catch (e) {
            //Do Nothing At ALL

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)

            localStorage.setItem('options', json)
        }
    }

    handleDeleteOptions() {

        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option ? true : false)
        }))
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat((option)) }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const selectedOption = this.state.options[randomNum]

        alert(selectedOption)
    }

    render() {
        const subtitle = "Put your life in the hands of a computer!"

        return (
            <div>
                <Header 
                subtitle = { subtitle }
                />
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}


const Header = (props) => {
    return (
        <div className="text-center mb-3">
            <h1 className="mt-5">{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'inDecision'
}


const Action = (props) => {
    return (
        <div className="mb-3">
            <button 
                className="d-block mx-auto btn btn-dark" 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What Should I Do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div className="mb-3">
            <button onClick={props.handleDeleteOptions} className="btn btn-dark mb-3">Remove All Options</button>
            {props.options.length === 0 && <h1 
                className="display-5 text-center text-uppercase p-5">
                Please add an option to get started!
            </h1>}
            <ul className="text-center list-group">
                {props.options.map((option) => {
                    return <Option 
                            key={option} 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}/>
                    })}
            </ul>
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            <li className="list-group-item">{props.optionText}
                <button
                    className="btn btn-link float-right"
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText)
                    }}
                >
                    Remove
                </button>
            </li>
        </div>
    )
}

class AddOption extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        e.persist()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => {
            return { error }
        })

        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = ''
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p className="alert alert-danger">{this.state.error}</p>}
               <form className="form-inline float-right mt-2" onSubmit={this.handleAddOption}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="option" />
                        <button className="btn btn-dark">Add Option</button>
                    </div>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<InDecisionApp />, document.getElementById('app'))
