import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './CourseCard.module.css';
import { SubHeading } from '../Heading/Heading';
const styles = {
    fontStyle : 'italic'
}

const CourseCard = (props) => {
    return(
        
                <div className={classes.CourseCard}>
                       <Link className={classes.CardLink} to={`/CourseInfo/${props.Coursetitle}`}>
                        <div className={classes.Thumbnail}>
                                <img className={classes.CourseLogo}  
                                        src={props.Courselogo} 
                                        alt="Course Logo" />
                        </div>
                        <div className={classes.CardInfo}>
                                <h3 className={classes.Title} > {props.Coursetitle} </h3>
                                <div style={styles}>
                                <SubHeading label={props.CourseUnits} />
                                </div>
                                
                        </div>
                        </Link> 
                </div>
      
        
    );
}
export default CourseCard;
