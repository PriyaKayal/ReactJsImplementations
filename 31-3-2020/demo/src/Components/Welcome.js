import React from 'react';
import { Component } from "react";
class Welcome extends Component{
    render(){
        return <div>
        <h1>{this.props.name}</h1> <h1>{this.props.id}</h1>
        </div>
    }
}
export default Welcome