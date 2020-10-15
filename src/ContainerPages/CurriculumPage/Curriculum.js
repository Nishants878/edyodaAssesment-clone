import React,{ useEffect, useState } from 'react';
import classes from './Curriculum.module.css';
import { Link } from 'react-router-dom';

import Accordion from '../../Components/Accordion/Accordion';
import Axios from 'axios';



export default function Curriculum(props){

    
      const [curriculum, setCurriculum] = useState({});
     
      

      useEffect(()=>{
        async function fetchApi() {
            const moduleId = props.match.params.moduleId;
            const request = await Axios.get(`https://5f87e6be49ccbb0016177ba2.mockapi.io/curriculumPage`);
            
            const mainData = request.data;
            const finalData =mainData[0][moduleId];
       
            
            
            setCurriculum(finalData); 
            
            return request
            //This will never give you the updated state, because setState is async
 
        }
        fetchApi();

      },[]);





    return(
        <div className={classes.CurriculumMainContainer}>
           
            
           <div className={classes.NavWrapper}>
           <Link  className={[classes.NavLinks, classes.Active].join(' ')} >Units</Link>
              <Link className={classes.NavLinks} to="/gradespage">Grades</Link>
            
           </div>
            
          <div className={classes.ModuleDetailContainer}>
              <div className={classes.LeftSectionWrapper}>

                     <div className={classes.ModuleDetailWrapper}>
                        <div className={classes.ModuleIconMegaWrapper}>
                            <div className={classes.IconWrapper}>
                              <img className={classes.Icon} src={curriculum?.leftSide?.moduleLogo} alt="AWSIcon"/>
                            </div>
                            <div className={classes.IconTextWrapper}>
                               <span className={classes.IconText}>
                               {curriculum?.leftSide?.moduleName}
                               </span>
                            </div>
                        </div>

                        <div className={classes.PerformancesWrapper}>
                            <div className={classes.LabelWrapper}>
                                <label className={classes.Label}>Grades :</label>
                                     <span>{curriculum?.leftSide?.grades}</span>
                            </div>

                            <div className={classes.LabelWrapper}>
                                <label className={classes.Label}>Total Attendance :</label>
                              <span>{curriculum?.leftSide?.totalattendance}</span>
                            </div>

                            <div className={classes.LabelWrapperBottom}>
                                <label className={classes.LabelBottom}>Last Week Attendance:</label>
                                <span className={classes.OnlySpan}>{curriculum?.leftSide?.lastWeekAttendance}</span>
                            </div>

                        </div>
                     </div>

                       <div className={classes.ModulePlanWrapper}>
                           <div className={classes.ModuleHeader}>
                               
					module plan
				
                           </div>
                           <div className={classes.ModuleText}>
                           Week - 1
                           </div>
                       </div>
              </div>

              <div className={classes.RightSectionWrapper}>
                  
              {
                  curriculum?.rightSide?.map(item =>{
                       return  <Accordion key={item.heading} heading={item.heading}/>
                  })
              }
                 
              
              </div>

          </div>
        </div>
    )
}