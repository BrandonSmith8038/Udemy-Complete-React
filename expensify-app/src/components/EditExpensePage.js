import React from 'react'

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
        This edit page.
        Editing the page with the ID of {props.match.params.id}
        </div>
    )
}

export default EditExpensePage
