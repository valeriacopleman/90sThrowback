import React, { Component } from 'react'



class Item extends Component {
    render() {
        const { title, addedby, description, url } = this.props
        return (
            
            <div className="App" >
               
            
               <div className="items">
                    <h3 >{ title }</h3>
                    <lable className="container"> {description} -Added By: { addedby } </lable>
                <br/>
                <br/>
                <img width="500" height="300" src={url} alt={title}></img>
                <br />
                <br />
                <br />
                </div>
                <br/>
                <br/>
            </div>
            
            
            
        )
    }
}

export default Item