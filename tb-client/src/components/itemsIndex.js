import React, { Component } from 'react'
import { connect } from 'react-redux';
import Item from './Item'
import { Link } from 'react-router-dom';


class itemsIndex extends Component {
    render() {
        const items = this.props.items.map( (item, i) => <Item key={i} title={ item.title } description={ item.description } addedby={ item.addedby } url= { item.url} />)
        return (
            
            <div >
                { items }
                <div className="App">
                <button className="btn"><Link to="/items/new">+Add a Throwback</Link></button>
                </div>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(itemsIndex);