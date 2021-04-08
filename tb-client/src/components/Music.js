import React, { Component } from 'react'
//import ReactPlayer from "react-player"
//import PropTypes from "prop-types";

export class Music extends Component {
    render() {
        return (
            <div>
                <iframe
      width="853"
      height="480"
      src={'https://www.youtube.com/embed/M6j7AuEckAc'}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
            </div>
        )
    }
}

export default Music
