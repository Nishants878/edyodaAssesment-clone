import React from 'react';
import classes from './ModuleCard.module.css';
import AwsLogo from '../../Assets/aws.png';
import TrainerPng from '../../Assets/tutor.png';
import { Link } from 'react-router-dom';

export default function ModuleCard () {
    return (
        <Link to="/curriculumpage" className={classes.ModuleCard}>
            <div className={classes.ModuleLogoWrapper}>
                <img className={classes.ModuleLogo} src={AwsLogo} alt="AwsLogo"/>
            </div>
            <div className={classes.MainDetailsWrapper}>
                <div className={classes.ModuleHeader}>
                    Intro To AWS
                </div>
                <div className={classes.TrainerInfoWrapper}>
                <img className={classes.TrainerLogo} src={TrainerPng} alt="TrainerPng"/>
               <div className={classes.TrainerName}>
                   Harshith
               </div>
                </div>
                <div className={classes.DurationWrapper}>
                    1 WEEKS
                </div>
            </div>
        </Link>
    )
}