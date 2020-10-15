import React, { useState } from "react";
import RotatingDropIcon from '../../Assets/chevron.svg'


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
        {isOpen &&
        <div className={classes.AccordionBody}>
            <div className={classes.SessionIndicator}>
                Session Plan
            </div>
            <div className={classes.SessionIndicator}>
                Session Recording
            </div>
        </div>
                 }
       
    </div>
  );
}

export default Accordion;
