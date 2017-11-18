import React from 'react'

export default class AddOption extends React.Component {

    state = {
        error: undefined
    }

    handleAddOption = (e) => {
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
               <form onSubmit={this.handleAddOption}>
                    <div>
                        <input type="text" name="option" />
                        <button>Add Option</button>
                    </div>
                </form>
            </div>
        )
    }
}
