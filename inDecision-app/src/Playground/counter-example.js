class Counter extends React.Component {


    constructor(props) {
        super(props)

        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleMinusClick = this.handleMinusClick.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'))

        if (!isNaN(count)) {
            this.setState(() => ({ count }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    handleAddClick() {

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleResetClick() {

        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    handleMinusClick(prevState) {

        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddClick} className="btn btn-dark mr-3">+1</button>
            <button onClick={this.handleResetClick} className="btn btn-dark mr-3">Reset</button>
            <button onClick={this.handleMinusClick} className="btn btn-dark mr-3">-1</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))


// let count = 0
// const addOne = () => {
//     count++
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0
//     renderCounterApp();
// }




// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//         <h1>Count: {count}</h1>
//             <button className="btn btn-primary m-3" onClick={addOne}>+1</button>
//             <button className="btn btn-primary m-3" onClick={reset}>Reset</button>
//             <button className="btn btn-primary m-3" onClick={minusOne}>-1</button>
//         </div>
//     )

//     ReactDOM.render(template2, appRoot)

// }

// renderCounterApp();
