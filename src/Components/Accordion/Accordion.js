import React, { useState } from "react";
import RotatingDropIcon from '../../Assets/chevron.svg'


import classes from "./Accordion.module.css";

function Accordion(props) {

    const[isOpen, setIsOpen] = useState(false);
    
 

  return (
    <div className={classes.AccordionCard}>
        <div
        onClick ={() => setIsOpen(!isOpen)}
        className={classes.AccordionHeader}>
        Day - 1 | Intro To Cloud
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
