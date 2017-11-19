import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header className="mr-3">
        <h1>Portfolio</h1>
        <NavLink  exact={true} to="/" activeClassName="is-active">Home</NavLink>
        <NavLink  to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
        <NavLink  to="/contact" activeClassName="is-active">Contact</NavLink>
    </header>
)

export default Header
