import React, { Component } from 'react';
import './CourseCard.css';

const styles = {
    fontStyle : 'italic'
}

const CourseCard = (props) => {
    return(    
        <div className="card-wrapper"> 
                <div className="card-content">
                        <div className="card-thumbnail">
                                <img src={props.Courselogo} alt="Course Logo" />
                        </div>
                </div>
                <div className="card-content">
                        <div className="skill-card-name">{props.Coursetitle}</div>
                <div className="amount">{props.CourseUnits}</div>
                </div>    
        </div>   
    );
}
export default CourseCard;
