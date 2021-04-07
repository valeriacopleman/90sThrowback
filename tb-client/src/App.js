import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'
import Nav from './components/Nav'
import itemsIndex from './components/itemsIndex'
import { getItems } from './actions/items';
import Form from './components/Form'


class App extends Component {
  
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }
    return (
      <Router> 
        <Nav />
          <div className="App">
            <Switch>  
              <Route exact path="/" component={ Home }/>
              <Route exact path="/items" component={ itemsIndex }/>
              <Route exact path="/items/new" component={ Form }/>
             
              
              <Route component={ErrorPage}/>
            </Switch>
          </div>
        <Footer />
      </Router>
    );
  }
}
  

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getItems })(App);
