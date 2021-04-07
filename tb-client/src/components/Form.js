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
                <h3>Add a Throwback</h3>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" name="title" value={this.state.title} onChange={ this.handleChange } />
                    </div>
                    <br />
                    <div>
                        <p><label htmlFor="descripton">Description: </label></p>
                        <textarea type="text" id="description" name="description" value={this.state.description} onChange={ this.handleChange } ></textarea>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="addedby">Added By: </label>
                        <input type="text" id="addedby" name="addedby" value={this.state.addedby} onChange={ this.handleChange } />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="url"> Image URL:</label>
                        <input type="text" id="url" name="url" value={this.state.url} onChange={ this.handleChange } />
                    </div>
                    <br />
                    <input type="submit" value="Create Throwback" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addItem })(Form)