import React from 'react'
import { Link } from 'react-router-dom'


const Portfolio = () => (
    <div>
        <h1>This is the portfolio page</h1>

        <Link to="/portfolio/52">Portfolio 52</Link>
        <Link to="/portfolio/62">Portfolio 62</Link>
        <Link to="/portfolio/72">Portfolio 72</Link>
    </div>
)


export default Portfolio
