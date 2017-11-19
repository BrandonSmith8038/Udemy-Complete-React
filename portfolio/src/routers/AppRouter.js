import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import PortfolioDashboard from '../components/PortfolioDashboard'
import PortfolioItem from '../components/PortfolioItem'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={PortfolioDashboard} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItem} exact={true}/>
                <Route path='/portfolio' component={Portfolio} />
                <Route path="/contact" component={Contact}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
    </BrowserRouter>
)

export default AppRouter
