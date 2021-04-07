import React, { Component } from 'react'
import { connect } from 'react-redux';
import Item from './Item'


class itemsIndex extends Component {
    render() {
        const items = this.props.items.map( (item, i) => <Item key={i} id={item.id} title={item.title} description={item.description} addedby={item.addedby} url={item.url} />)
        return (
            
            <div>
                { items }
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