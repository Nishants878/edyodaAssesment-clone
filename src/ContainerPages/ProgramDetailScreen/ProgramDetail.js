import React from 'react';
import classes from './ProgramDetail.module.css';
import BlueBg from '../../Assets/blueBg.jpg';
import PlaylistIcon from '../../Assets/Playlist.png';
import Clock from '../../Assets/Clock.png'
import ModuleCard from '../../Components/ModuleCard/ModuleCard';




export default function ProgramDetail(){
    return(
        <div className={classes.ProgramDetailMainContainer}>
            <div className={classes.ImageSectionWrapper}>
              <div className={classes.BackgroundImageSection}>
                  <div className={classes.BackgroundImageWrapper}>
                      <img className={classes.BGImage} src={BlueBg} alt="Blue Background" />
                  </div>
              </div>
              <div className={classes.CourseDetailsWrapper}>
                <div className={classes.CourseNameWrapper}>
                RB-020420 - React Developer Program
                </div>
                <div className= {classes.CourseCode}>
                RB020420
                </div>
                <div className={classes.CourseIconsWrapper}>
                    <div className={classes.LeftWrapper}>
                        <img className={classes.CourseDetailsIcons} src={PlaylistIcon} alt="PlaylistIcon"/>
                        <div className={classes.SubSectionTitle}>
                            <div>5</div>
                            <div>modules</div>
                        </div>
                    </div>

                    <div className={classes.RightWrapper}>
                        <img className={classes.CourseDetailsIcons} src={Clock} alt="Clock"/>
                        <div className={classes.SubSectionTitle}>
                            <div>20</div>
                            <div>Weeks</div>
                        </div>
                    </div>
                </div>
              </div>
              </div>
        
           <div className={classes.ProgramProgressSection}>
               <div className={classes.ProgramHeader}>
               Program Progress
               </div>
               <div className={classes.ProgramDetailsContainer}>
                   <div className={classes.StatusWrapper}>
                       <span className={classes.Numbers}>
                           1
                       </span>
                       <span className={classes.SubSectionText}>
                           Class Rank
                       </span>
                   </div>

                   <div className={classes.StatusWrapper}>
                       <span className={classes.Numbers}>
                       80.0%
                       </span>
                       <span className={classes.SubSectionText}>
                           Avg Score
                       </span>
                   </div>

                   <div className={classes.StatusWrapper}>
                       <span className={classes.Numbers}>
                       91.96
                       </span>
                       <span className={classes.SubSectionText}>
                       SHS
                       </span>
                   </div>
               </div>
           </div>

           <div className={classes.ModuleHeaderWrapper}>
               <div className={classes.ModulesHeader}>
               Modules
               </div>
           </div>

           <div className={classes.ModuleSCardsSection}>
              <ModuleCard/> <ModuleCard/><ModuleCard/><ModuleCard/><ModuleCard/><ModuleCard/><ModuleCard/>
           </div>
        </div>
    )
}