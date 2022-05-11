import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap'

class CatIndex extends Component {
    render() {
        return (
            <div>
                <h2>Here our a bunch of cats!</h2>
                {this.props.cats && this.props.cats.map(cat => {

                    return <p key={cat.id}>{cat.name}</p>
                    
                })}


            </div>
        );
    }
}

export default CatIndex;