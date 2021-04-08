import React, { Component } from 'react'

export class Music extends Component {
    render() {
        return (
            <div className="App"> 
                <br />
                
                <iframe
                    width="1000"
                    height="600"
                   
                    
                    src={'https://www.youtube.com/embed/M6j7AuEckAc'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                   <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Music
