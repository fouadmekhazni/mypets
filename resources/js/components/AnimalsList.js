import React from 'react';
import ReactDOM from 'react-dom';
import Animal from 'Animal';
import axios from 'axios';

class AnimalsList extends React.Component{
    constructor(){
        this.state={animals:[]}
    }
    componentDidMount(){
        axios.get("/animals").then((res)=>{
             this.setState(this.state.animals = res.data);
        })
    }
    render(){
        return <div><Animal props={this.state.animals}></Animal></div>
    }
}

export default AnimalsList;

if (document.getElementById('animals')) {
    ReactDOM.render(<AnimalsList />, document.getElementById('animals'));
}
