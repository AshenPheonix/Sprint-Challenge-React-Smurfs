import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <button onClick={props.edit}>Edit</button>
      <button onClick={props.delete}>delete</button>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

