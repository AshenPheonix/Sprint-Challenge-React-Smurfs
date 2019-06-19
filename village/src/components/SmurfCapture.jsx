import React, { Component } from 'react'
import Smurf from './Smurf'
import axios from 'axios'

export default class SmurfCap extends Component {
    state={
        name:'',
        age:'',
        height:'',
        id:''
    }

    componentDidMount(){
        axios.get('http://localhost:3333/smurfs').then(data=>{
            this.setState((prevState, props) => ({...data.data.filter(smurf=>smurf.id==this.props.match.params.id[0])[0]  })
        )})
    }

    render() {
        if(this.state.name){
            return (
                <ul>
                    <Smurf
                        name={this.state.name}
                        id={this.state.id}
                        age={this.state.age}
                        height={this.state.height}
                        key={this.state.id}
                        edit={()=>this.props.edit({...this.state})}
                        delete={()=>this.props.delete({...this.state})}
                    />
                </ul>
            )
        }
        else{
            return(
                <section>Loading, Please Wait.</section>
            )
        }
    }
}
