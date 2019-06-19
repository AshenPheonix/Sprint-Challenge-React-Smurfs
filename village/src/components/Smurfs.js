import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Smurf from './Smurf';
import './smurf.css'

class Smurfs extends Component {

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link 
                to={`/smurf/${smurf.id}`}
                key={smurf.id}
              >
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  edit={()=>this.props.edit(smurf)}
                  delete={()=>this.props.delete(smurf)}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
