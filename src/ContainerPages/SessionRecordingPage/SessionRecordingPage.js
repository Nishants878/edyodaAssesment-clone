import React from 'react'
import classes from "./SessionRecordingPage.module.css"

function SessionRecording() {
   
    return (
       <div className={classes.SessionRecordingMainContainer}>


           <div className={classes.ContentWrapper}>
               <div className={classes.Row}>
                   <div className={classes.Column}>
                       <div className={classes.Wrapper}>
                       <iframe className={classes.Iframe} src="https://player.vimeo.com/video/462708845" frameborder="0" title="Iframe"  webkitallowfullscreen="" mozallowfullscreen="" ></iframe>
                       </div>
                  
                   </div>
              
               </div>
           
           </div>
           
       </div>
    )
}

export default SessionRecording
