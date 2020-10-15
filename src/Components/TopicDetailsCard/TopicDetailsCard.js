import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './TopicDetailsCard.module.css';
import { SubHeading } from '../Heading/Heading';

const TopicDetailsCard = (props) => {
    return(
        
                <div className={classes.TopicDetailsCard}>
                       <Link className={classes.CardLink} to={`/Problems/${props.Coursetitle}`}>
                        
                        <div className={classes.CardInfo}>
                                <p className={classes.TopicName} > {props.topic} </p>
                                <p className={classes.Status}>{props.status}</p>                           
                        </div>
                        </Link> 
                </div>
      
        
    );
}
export default TopicDetailsCard;
