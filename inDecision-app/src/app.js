class InDecisionApp extends React.Component {

    render() {
        const title = "inDecision App"
        const subtitle = "Put your life in the hands of a computer!"
        const options = ['Thing 1', 'Thing 2', 'Thing 34', 'Thing 4']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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

    handlePick() {
        alert('handlePick')
    }

    render() {
        return (

            <div className="mb-3">
                <button className="d-block mx-auto btn btn-dark" onClick={this.handlePick}>What Should I Do?</button>
            </div>

        )
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove() {

        console.log(this.props.options)
        //alert('Handle Remove')
    }

    render() {
        return (
            <div className="mb-3">
                <button onClick={this.handleRemove} className="btn btn-dark">Remove All Options</button>
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

    handleAddOption(e) {
        e.preventDefault();
        e.persist()

        const option = e.target.elements.option.value.trim()

        if (option) {
            //InDecisionApp.options.push(option)
            e.target.elements.option.value = ''
            console.log(option)
        }
    }

    render() {
        return (
            <div>
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
