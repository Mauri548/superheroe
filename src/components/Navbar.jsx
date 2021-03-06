import React from 'react'
import Search from './Search'

const Navbar = (props) => {
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">SuperHeroes</a>
                    <Search search={props.search} />     
                </div>
            </nav>
        </div>
    )
}

export default Navbar