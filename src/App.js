import React from 'react';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      text: 'this is the localState text'
    };
  }

  update (e) {
    this.setState({
      text: e.target.value
    });
  }

  render () {
    return (
      <div>
        <h1>{this.state.text}</h1>
        
        <input type="text" 
               onChange={this.update.bind(this)} 
        />
      
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