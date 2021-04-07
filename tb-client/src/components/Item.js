import React, { Component } from 'react'


class Item extends Component {
    render() {
        const { title, addedby, id, description, url } = this.props
        return (
            
            <div>
                <h3>{ title }</h3>
                <li>Created By: { addedby }</li>
                <p>{url}</p>
                <p>{description}</p>
                
            </div>
            
            
            
        )
    }
}

export default Item