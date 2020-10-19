import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetailsCard.css';


const TopicDetailsCard = (props) => {
    return(  
        <div className="assignment-status-card">
                <div className="assignment-details">
                        <div className="ass-num-name">
                                <Link to={`/courses/${props.courseTitle}/${props.id}`} >
                                <span className="ass-num">{props.id}). </span>
                                <span className="ass-name">{props.name}</span>
                                </Link>
                        </div>
                </div>
                <div className="assignment-score error">
                        {props.status}
                </div>
        </div>
      
        
    );
}
export default TopicDetailsCard;
