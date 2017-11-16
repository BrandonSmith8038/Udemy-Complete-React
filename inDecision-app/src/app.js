class InDecisionApp extends React.Component {

    constructor(props) {
        super(props)

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)

        this.state = {
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const selectedOption = this.state.options[randomNum]

        alert(selectedOption)
    }

    render() {
        const title = "inDecision App"
        const subtitle = "Put your life in the hands of a computer!"

        return (
            <div>
                <Header 
                title={title} 
                subtitle={subtitle}
                />
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

class Header extends React.Component {


    render() {
        return (

            <div className="text-center mb-3">
            <h1 className="mt-5">{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>

        )
    }
}

class Action extends React.Component {

    render() {
        return (

            <div className="mb-3">
                <button 
                className="d-block mx-auto btn btn-dark" 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                What Should I Do?
                </button>
            </div>

        )
    }
}

class Options extends React.Component {


    render() {
        return (
            <div className="mb-3">
                <button onClick={this.props.handleDeleteOptions} className="btn btn-dark">Remove All Options</button>
                <ul className="text-center list-group">
                    {
                        this.props.options.map((option) => {
                            return <Option key={option} optionText={option} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

class Option extends React.Component {

    render() {
        return (
            <li className="list-group-item">{this.props.optionText}</li>
        )
    }
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

        // this.props.handleAddOption(option)

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
