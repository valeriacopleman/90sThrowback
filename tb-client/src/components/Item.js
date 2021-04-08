import React, { Component } from 'react'


class Item extends Component {
    render() {
        const { title, addedby, description, url } = this.props
        return (
            
            <div >
                <br />
                <h3>{ title }</h3>
                <img src={url} alt={title}></img>
        
                <p>{description}</p>
                <li>Added By: { addedby }</li>
                <br />
                <hr />
                
            </div>
            
            
            
        )
    }
}

export default Item