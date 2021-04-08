import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/items'

class Form extends Component {

    state = {
        title: "",
        description: "",
        addedby: "",
        url: ""
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state, this.props.history);
    }

    render() {
       

        return (
            <div>
            <div className="form">
            <br/>
            <br/>
                <ul>
                <lable className="container">Add a Throwback</lable>
                <form onSubmit={ this.handleSubmit }>
                    <br/>
                    <div>
                        <label htmlFor="title"></label>
                        <input type="text" id="title" name="title" placeholder="Title" value={this.state.title} onChange={ this.handleChange } />
                    </div>
                   <br/>
                    <div>
                        <p><label htmlFor="descripton"></label></p>
                        <textarea type="text" id="description" name="description" placeholder="Description" value={this.state.description} onChange={ this.handleChange } ></textarea>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="addedby"></label>
                        <input type="text" id="addedby" name="addedby" placeholder="Your Name" value={this.state.addedby} onChange={ this.handleChange } />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="url"></label>
                        <input type="text" id="url" name="url" placeholder="Image URL" value={this.state.url} onChange={ this.handleChange } />
                    </div>
                    <br />
                    <input type="submit" value="Create Throwback" />
                </form>
                </ul>
                <br/>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
           

            </div>
            
        )
    }
}

export default connect(null, { addItem })(Form)