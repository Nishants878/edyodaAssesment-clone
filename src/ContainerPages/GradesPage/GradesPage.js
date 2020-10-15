import React from 'react';
import classes from './GradesPage.module.css';
import { Link } from 'react-router-dom';
import AWSIcon from '../../Assets/aws.png';

export default function GradesPage(){
    return(
        <div className={classes.GradesMainContainer}>
              <div className={classes.NavWrapper}>
              <Link className={classes.NavLinks} to="/curriculumpage">Units</Link>
            <Link className={[classes.NavLinks, classes.Active].join(' ')} to="/gradespage">Grades</Link>
           </div>
           <div className={classes.ProgramDashboard}>

               <div className={classes.StudentDashboard}>
                   <div className={classes.ProfileContainer}>
                     <img className={classes.ProgramIcon} src={AWSIcon} alt="AWSIcon"/>
                   <div className={classes.StudentCardTags}>
                       <div className={classes.StudentCardName}>
                           <div className={classes.ProgramName}>
                           Intro to AWS
                           </div>
                       </div>
                       <div className={classes.StudentCardOtherDetails}>
                           <div className={classes.ClassRank}>
                               <span className={classes.DetailsValue}>1</span>
                               <span className={classes.DetailsTag}>Class Rank</span>
                           </div>

                           <div className={classes.AverageScore}>
                               <span className={classes.DetailsValue}>%</span>
                               <span className={classes.DetailsTag}>Avg. Score</span>
                           </div>

                           <div className={classes.Shs}>
                               <span className={classes.DetailsValue}>50.0</span>
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
        </div>
    )
}