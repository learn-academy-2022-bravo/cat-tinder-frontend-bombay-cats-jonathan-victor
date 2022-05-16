import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
class Header extends Component {
    render() {

        return (
            <div>
        <Nav className="header-nav">

            <NavItem>
              <NavLink to="/catindex" className="nav-link">Meet the Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/catnew" className="nav-link">Add a New Cat</NavLink>
            </NavItem>

        </Nav>
                <h2>Fluffy Cat Tinder page </h2>
            </div>
        );
    }
}

export default Header;