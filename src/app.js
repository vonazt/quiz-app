import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {

  componentDidMount = () => {

    axios({
      method: 'GET',
      url: 'https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple'
    })
      .then(res => console.log(res.data));
  }

  render() {
    return(
      <h1>Up and running</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
