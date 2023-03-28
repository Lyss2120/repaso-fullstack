import React from 'react'
import { Link } from 'react-router-dom'

const SubMenu = () => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className="nav-link" to="/about/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about/mision">Mision</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about/vision">Vision</Link>
            </li>

        </ul>
    )
}

export default SubMenu