import React,{ useEffect, useState } from 'react';
import classes from './Curriculum.module.css';
import { Link } from 'react-router-dom';
import AWSIcon from '../../Assets/aws.png';
import Accordion from '../../Components/Accordion/Accordion';
import Axios from 'axios';



export default function Curriculum(){

    //  const [curriculumData, setCurriculumData] =useState([]);

    //  const fetchApi = async () =>{
    //      const url = "https://5f87e6be49ccbb0016177ba2.mockapi.io/curriculumPage";

    //      const data = await Axios.get(url);
    //      console.log(data);

    //      setCurriculumData(data.data)

    //  };

    //  useEffect(() =>{
    
   
     
    //     fetchApi();
        
    
    //  }, []); //in this if we leave [] as empty then it works as component did mount



    return(
        <div className={classes.CurriculumMainContainer}>
            {/* <div>{(curriculumData==[]) ?"gfsadfgsadgsdgasg" : JSON.stringify(curriculumData)  }</div> */}
           <div className={classes.NavWrapper}>
           <Link className={[classes.NavLinks, classes.Active].join(' ')} to="/curriculumpage">Units</Link>
              <Link className={classes.NavLinks} to="/gradespage">Grades</Link>
            
           </div>

          <div className={classes.ModuleDetailContainer}>
              <div className={classes.LeftSectionWrapper}>

                     <div className={classes.ModuleDetailWrapper}>
                        <div className={classes.ModuleIconMegaWrapper}>
                            <div className={classes.IconWrapper}>
                              <img className={classes.Icon} src={AWSIcon} alt="AWSIcon"/>
                            </div>
                            <div className={classes.IconTextWrapper}>
                               <span className={classes.IconText}>
                               Intro to AWS
                               </span>
                            </div>
                        </div>

                        <div className={classes.PerformancesWrapper}>
                            <div className={classes.LabelWrapper}>
                                <label className={classes.Label}>Grades :</label>
                                <span>NA</span>
                            </div>

                            <div className={classes.LabelWrapper}>
                                <label className={classes.Label}>Total Attendance :</label>
                                <span>20%</span>
                            </div>

                            <div className={classes.LabelWrapperBottom}>
                                <label className={classes.LabelBottom}>Last Week Attendance:</label>
                                <span className={classes.OnlySpan}>20%</span>
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
              <Accordion/>
              <Accordion/>
              <Accordion/>
              <Accordion/>
              <Accordion/>
              </div>

          </div>
        </div>
    )
}