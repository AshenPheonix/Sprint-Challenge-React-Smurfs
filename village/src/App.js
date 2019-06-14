import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import Navigation from './components/Navigation'
import {Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      editing:null,
      name:'',
      age:'',
      height:''
    };
  }

  componentDidMount=()=>{
    axios.get('http://localhost:3333/smurfs').then(data=>{
      this.setState({
        smurfs:data.data
      })      
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf=e=>{
    let temp={name:this.state.name,age:this.state.age,height:this.state.height}

    if(this.state.editing){
      axios.put(`http://localhost:3333/smurfs/${this.state.editing}`,temp).then(data=>{
        this.setState({editing:null,name:'',age:'',height:'',smurfs:data.data})
      })
    }else{
      axios.post('http://localhost:3333/smurfs',temp).then(data=>{
        this.setState({
          smurfs:data.data,
          name: '',
          age: '',
          height: ''
        })
      }).catch(err=>console.error(err))
    }
  }

  clear=e=>{
    e.preventDefault();
    
    this.setState({editing:null,name:'',age:'',height:''})
    this.props.history.push('/')
  }

  edit=e=>{
    this.setState({
      editing:e.id,
      name:e.name,
      age:e.age,
      height:e.height      
    })
    this.props.history.push('/add')
  }

  delete=e=>{
    axios.delete(`http://localhost:3333/smurfs/${e.id}`).then(data=>{
      this.setState({smurfs:data.data})
    })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/add" render={()=>(
          <SmurfForm 
            addSmurf={this.addSmurf}
            {...this.state}
            handleInputChange={this.handleInputChange}
            clear={this.clear}
          />
        )} />
        <Route path="/" exact render={()=>(
          <Smurfs 
            smurfs={this.state.smurfs} 
            edit={this.edit}
            delete={this.delete}
          />
        )}/>
      </div>
    );
  }
}

export default App;
