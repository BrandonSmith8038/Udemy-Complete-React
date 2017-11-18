import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div className="mb-3">
            <button onClick={props.handleDeleteOptions}>Remove All Options</button>
            {props.options.length === 0 && <h1 >
                Please add an option to get started!
            </h1>}
            <ul>
                {props.options.map((option) => {
                    return <Option 
                            key={option} 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}/>
                    })}
            </ul>
        </div>
)

export default Options
