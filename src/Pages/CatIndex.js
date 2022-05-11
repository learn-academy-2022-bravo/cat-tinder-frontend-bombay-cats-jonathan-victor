import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class CatIndex extends Component {
    render() {
        return (
            <div>
                <h2>Here our a bunch of cats!</h2>
                {this.props.cats && this.props.cats.map(cat => {

                    return <p key={cat.id}>{cat.name}</p>,
                    
                <NavLink 
                to={`/catshow/${cat.id}`}>{cat.name}
                </NavLink>                    
                })}


            </div>
        );
    }
}

export default CatIndex;