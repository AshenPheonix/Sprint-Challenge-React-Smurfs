import React, { Component } from 'react';

class SmurfForm extends Component {

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf()
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
          {
            this.props.editing!==null && 
            <button onClick={this.props.clear}>Clear</button>
          }
        </form>
      </div>
    );
  }
}

export default SmurfForm;
