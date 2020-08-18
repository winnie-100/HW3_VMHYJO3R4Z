import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
            <div className="container">
                <a href="#">Hulk</a>
                <a href="#" class="logo is-active">Mabel</a>
                <a href="#">Venom</a>
            </div>
            </nav>
        )
    }
}
export default Navbar;
 