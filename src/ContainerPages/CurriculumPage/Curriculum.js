import React,{ useEffect, useState } from 'react';
import classes from './Curriculum.module.css';

import GradesPage from '../GradesPage/GradesPage';
import Accordion from '../../Components/Accordion/Accordion';
import Axios from 'axios';
import ProgressLoader from '../../Components/ProgressLoaderSection/ProgressLoaderSection';



export default function Curriculum(props){

    
      const [curriculum, setCurriculum] = useState({});
      const[toggle, setToggle] = useState(false);
      const [progressLoader, setProgressLoader] =  useState(false);
      
      const moduleId = props.match.params.moduleId;
      console.log(moduleId)
      useEffect(()=>{
        async function fetchApi() {
            setProgressLoader(true)
           
            const request = await Axios.get(`https://5f87e6be49ccbb0016177ba2.mockapi.io/curriculumPage`);
            
            const mainData = request.data;
            const finalData =mainData[0][moduleId];
       
            
            
            setCurriculum(finalData); 
            setProgressLoader(false)
            return request
            //This will never give you the updated state, because setState is async
 
        }
        fetchApi();

      },[moduleId]);

      const changeToggleGrade=()=>{
          setToggle(true)

      }
      const changeCurriculumPage=()=>{
        setToggle(false)

    }






    return(
        
        
        <div className={classes.CurriculumMainContainer}>
          <div className={classes.ProgressWrapper}> {progressLoader ? <ProgressLoader/>:null}</div>
         
           <div className={classes.NavWrapper}>
           <div onClick={changeCurriculumPage} className={!(toggle) ? [classes.NavLinks, classes.Active].join(' ') : classes.NavLinks} >Units</div>
              <div onClick={changeToggleGrade} className={(toggle) ? [classes.NavLinks, classes.Active].join(' ') : classes.NavLinks} >Grades</div>
            
           </div>
           <div className={classes.GradePageContainer}>
               {(toggle) ?<GradesPage icon={curriculum?.leftSide?.moduleLogo} rank={curriculum?.leftSide?.classRank} 
               avgScore={curriculum?.leftSide?.avgScore} 
               SHS={curriculum?.leftSide?.SHS} 
               moduleName={curriculum?.leftSide?.moduleName} 
               
               /> : null}
               </div>
           
            
          {!(toggle) ?<div className={[classes.ModuleDetailContainer]}>
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
                       return  <Accordion key={item.heading} heading={item.heading}  moduleName={curriculum?.leftSide?.moduleName} />
                  })
              }
                 
              
              </div>

          </div> :null}
        </div>
    )
}