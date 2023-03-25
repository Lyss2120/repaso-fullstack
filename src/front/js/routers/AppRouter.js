import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const AppRouter = () => {
    return (
        <Router>
            <Route path='/about'>
                <h1>About</h1>
            </Route>
            <Route path='/contact'>
                <h1>Contact</h1>
            </Route>
            <Route path='/'>
                <h1>Home</h1>
            </Route>

        </Router>
    )
}

export default AppRouter