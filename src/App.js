import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Mr first React App</h1>
        <p>Hello, { this.props.name }!</p>
        <p>{ this.props.num }</p>
      </div>
    );
  }
};

App.propTypes = {
  name: React.PropTypes.string,
  num: React.PropTypes.number.isRequired
};

App.defaultProps = {
  name: 'World',
  num: 0
};

export default App;