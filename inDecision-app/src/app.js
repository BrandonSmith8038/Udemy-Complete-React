class InDecisionApp extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {


    render() {
        return (

            <div className="text-center mb-3">
            <h1 className="mt-5">inDecision</h1>
            <h2>Put Your Life In The Hands Of A Computer!</h2>
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
                    <Option />
                    <Option />
                    <Option />
                    <Option />
                    <Option />
                </ul>
            </div>
        )
    }
}

class Option extends React.Component {

    render() {
        return (
            <li className="list-group-item">Option</li>
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
