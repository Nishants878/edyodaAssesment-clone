import React, { Component } from 'react';
import classes from './Heading.module.css';

export class MainHeading extends Component{
    render(){
        return(
            
                <p className={classes.MainHeading}>
                {this.props.label}
                </p>   
            
        );
    }
}
export class SubHeading extends Component{
    render(){
        return(
                <p className={classes.SubHeading}>
                {this.props.label}
                </p>   
            
        );
    }
    
}
