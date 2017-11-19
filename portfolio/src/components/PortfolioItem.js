import React from 'react'

const PortfolioItem = (props) => {
    return (
        <div>
            <p>This is the page for viewing a portfolio item.</p>
            <p>Your are currently view portfolio with the ID of {props.match.params.id}</p>
        </div>
    )
}

export default PortfolioItem
