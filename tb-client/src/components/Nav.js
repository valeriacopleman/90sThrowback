import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div className="App">
                <ul >
                    <button className="btn" ><Link to="/">Home</Link></button>
                    <button className="btn"> <Link to="/items">Throwbacks!</Link></button>
                    <button className="btn"><Link to="/items/new">+Add a Throwback</Link></button>
                    <button className="btn"><Link to="/music">90sHits</Link></button>
                </ul>
                <br />
            </div>
        )
    }
}

export default Nav