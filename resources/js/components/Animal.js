import React from 'react';


class Animal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <p>{this.props.nom}</p>
            <p>{this.props.age}</p>
            <p>{this.props.descr}</p>
            <p>{this.props.image}</p>
        </div>
    }
}

export default Animal;

