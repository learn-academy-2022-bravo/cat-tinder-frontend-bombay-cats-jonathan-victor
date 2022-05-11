import React, { Component } from 'react';

class CatShow extends Component {
    render() {
        return (
            <div>
                <h1>Check out these fluffy Cats!</h1>

                <h2>Hi, my name is {this.props.cat.name}!</h2>
                <img src={this.props.cat.image} alt="adorable cat" height="200px" />
                <p>I am {this.props.cat.age} years old. I enjoy {this.props.cat.enjoys}.</p>
            </div>
        );
    }
}

export default CatShow;