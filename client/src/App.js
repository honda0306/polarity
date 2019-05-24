import React, { Component } from 'react';
import axios from 'axios';

import ListView from './components/ListView';
import './App.css';

class App extends Component {
  
  state = {
    users: [],
  }

  componentDidMount() {
    axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_x_api_key;
    axios.get('https://q1o3gh76yb.execute-api.us-west-2.amazonaws.com/InterviewProd/users')
      .then((res) => {
        const users = res.data;
        this.setState({
          users
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <ListView users={this.state.users} />
      </div>
    )
  }
}

export default App;
