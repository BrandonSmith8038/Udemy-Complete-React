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

    render() {
        return (

            <div className="mb-3">
                <button className="d-block mx-auto btn btn-dark">What Should I Do?</button>
            </div>

        )
    }
}

class Options extends React.Component {

    render() {
        return (
            <div className="text-center mb-3">
                <ul className="list-group">
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

    render() {
        return (
            <div>
                <button className="btn btn-dark">Add Option</button>
            </div>
        )
    }
}

ReactDOM.render(<InDecisionApp />, document.getElementById('app'))
