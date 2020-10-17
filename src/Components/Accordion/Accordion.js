import React, { useState } from "react";
import RotatingDropIcon from '../../Assets/chevron.svg';

import { Link } from 'react-router-dom';
import classes from "./Accordion.module.css";

function Accordion(props) {
  console.log(props)

    const[isOpen, setIsOpen] = useState(false);
    
 

  return (
    // Link to="curriculum/python"
    <div className={classes.AccordionCard}>
        <div
        onClick ={() => setIsOpen(!isOpen)}
        className={classes.AccordionHeader}>
         {props.heading}
        <img className={[isOpen ? classes.DropIcon:classes.DropRotate]} src={RotatingDropIcon} alt="DropDownIcon"/>
        </div>
        {<div className={isOpen ? classes.AccordionOpenBody : classes.AccordionBody}>
        <Link  to="/sessionplan"  className={classes.SessionIndicator}>
          Session Plan
            </Link>
        <Link to="/sessionrecording" className={classes.SessionIndicator}>
          Session Recording
            </Link>
      </div>
      }
       
    </div>
  );
}

export default Accordion;
