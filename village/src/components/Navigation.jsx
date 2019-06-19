import React, { Component } from 'react'
import './nav.css'
import {NavLink} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <NavLink activeClassName="active" exact to="/">View Smurfs</NavLink>
                <NavLink activeClassName="active" to="/add">Add Smurf</NavLink>
            </nav>
        )
    }
}
