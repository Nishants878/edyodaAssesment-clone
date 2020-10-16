import React from 'react';
import classes from './GradesPage.module.css';




export default function GradesPage(props){
  
    console.log(props)
  


    return(
        


           <div className={classes.ProgramDashboard}>

               <div className={classes.StudentDashboard}>
                   <div className={classes.ProfileContainer}>
                     <img className={classes.ProgramIcon} src={props.icon} alt="AWSIcon"/>
                   <div className={classes.StudentCardTags}>
                       <div className={classes.StudentCardName}>
                           <div className={classes.ProgramName}>
                           {props.moduleName}
                           </div>
                       </div>
                       <div className={classes.StudentCardOtherDetails}>
                           <div className={classes.ClassRank}>
    <span className={classes.DetailsValue}>{props.rank}</span>
                               <span className={classes.DetailsTag}>Class Rank</span>
                           </div>

                           <div className={classes.AverageScore}>
    <span className={classes.DetailsValue}>{props.avgScore}</span>
                               <span className={classes.DetailsTag}>Avg. Score</span>
                           </div>

                           <div className={classes.Shs}>
    <span className={classes.DetailsValue}>{props.SHS}</span>
                               <span className={classes.DetailsTag}>SHS</span>
                           </div>
                       </div>
                   </div>
                   </div>
                   
                   <div className={classes.StudentAssignmentContainer}>
                   <div className={classes.AssignmentStatusCard}>
                       <div className={classes.AssignmentDetails}>
                           <span className={classes.Assignment}>No Topics Available</span>
                       </div>

                   </div>

               </div>
               </div>

              

           </div>



        
    )
}