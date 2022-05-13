import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

class CatShow extends Component {
    render() {
        let { cat } = this.props
        return (
            <div>
                <h1>Check out these fluffy Cats!</h1>
                <h2>Hi, my name is {cat && cat.name}!</h2>
                <img src={cat && cat.image} alt="adorable cat" height="200px" />
                <p>I am {cat && cat.age} years old. I enjoy {cat && cat.enjoys}.</p>
                <brake/>
                <NavLink to="/catindex">
                    <Button>
                        Delete Cat Profile
                    </Button>
                </NavLink>
            </div>

            
        );
    }
}

export default CatShow;