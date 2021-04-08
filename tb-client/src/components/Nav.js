import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/items">Throwbacks!</Link></button>
                    <button><Link to="/items/new">+Add a Throwback</Link></button>
                    <button><Link to="/music">90sHits</Link></button>
                </ul>
                <br />
            </div>
        )
    }
}

export default Nav