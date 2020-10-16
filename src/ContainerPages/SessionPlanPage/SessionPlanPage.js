import React from 'react'
import classes from "./SessionPlanPage.module.css"

function SessionPlanPage() {
   
    return (
       <div className={classes.SessionPlanMainContainer}>
           <div className={classes.ContentWrapper}>
               <div className={classes.PageTitle}>
               Session Plan
             </div>
             <p><big><strong>Topics:</strong></big></p>
             <p>- Cloud Computing</p>
                <p>- IAAS</p>
                <p>- PASS</p>
                <p>- SASS</p>
                <p>- Intro to AWS</p>
                <p>- AWS Dashboard</p>
                <p>- List of AWS Services</p>
                <p><big><strong>Session Link:</strong></big></p>
                <p><samp>https://zekelabs.zoom.us/meeting/register/tZYufuChrj8qHNElsq4QJSq6f3rQKQie7WFA</samp><br/>
&nbsp;</p>

<p><big><strong>Meeting Password:</strong></big></p>

<p><samp>AWS-LIVE</samp></p>
           </div>
       </div>
    )
}

export default SessionPlanPage
