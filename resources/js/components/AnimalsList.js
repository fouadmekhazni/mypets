import React from 'react';
import ReactDOM from 'react-dom';
import Animal from 'Animal';

class AnimalsList extends React.Component{
    constructor(){
        this.state={animals:[]}
    }
    render(){
        return <div><Animal props={this.state.animals}></Animal></div>
    }
}

export default AnimalsList;

if (document.getElementById('animals')) {
    ReactDOM.render(<AnimalsList />, document.getElementById('animals'));
}
