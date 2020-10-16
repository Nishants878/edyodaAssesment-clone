import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./ClassRoomCards.module.css"


function ClassRoomCards(props) {
    return (
        <div className={classes.Cards}>
            <div className={classes.CardWrapper}>
                <Link className={classes.ProgramLinks} to="/programdetailscreen">
                    <div className={classes.CardContent}>
                        <div className={classes.CardThumbnail}>
                            <img src={props.imgSrc} alt="Course Background" />
                        </div>
                    </div>
                    <div className={classes.CardDescription}>
                        <div className={classes.CourseNameContainer}>
                            {props.topic}
                        </div>
                        <div className={classes.CourseUnits}>
                            {`${props.units} Units`}
                        </div>

                    </div>
                </Link>

            </div>

        </div>
    )
}

export default ClassRoomCards
