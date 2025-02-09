import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <section className="stats">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </section>
      <section className="buttons">
        <button onClick={props.edit}>Edit</button>
        <button onClick={props.delete}>Delete</button>
      </section>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

