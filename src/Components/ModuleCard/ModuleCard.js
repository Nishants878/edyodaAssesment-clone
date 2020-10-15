import React from 'react';
import classes from './ModuleCard.module.css';
import AwsLogo from '../../Assets/aws.png';
import TrainerPng from '../../Assets/tutor.png';
import { Link } from 'react-router-dom';

export default function ModuleCard (props) {
    
    return (
        <Link to={`/curriculumpage/${props.id}`} className={classes.ModuleCard}>
            <div className={classes.ModuleLogoWrapper}>
                <img className={classes.ModuleLogo} src={props.moduleLogo} alt="AwsLogo"/>
            </div>
            <div className={classes.MainDetailsWrapper}>
                <div className={classes.ModuleHeader}>
                    {props.moduleName}
                </div>
                <div className={classes.TrainerInfoWrapper}>
                <img className={classes.TrainerLogo} src={props.trainerProfile} alt="TrainerPng"/>
               <div className={classes.TrainerName}>
                   {props.trainer}
               </div>
                </div>
                <div className={classes.DurationWrapper}>
                    {`${props.weeks} WEEKS`}
                </div>
            </div>
        </Link>
    )
}