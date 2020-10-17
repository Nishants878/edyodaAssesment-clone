import React, { useState, useEffect } from 'react'
import classes from "./ClassRoomPage.module.css"
import Axios from "axios"
import ClassRoomCards from "../../Components/ClassRoomCards/ClassRoomCards";
import ProgressLoader from '../../Components/ProgressLoaderSection/ProgressLoaderSection';



function ClassRoomPage() {
    const [allCards, setAllCards] = useState([]);
    const [progressLoader, setProgressLoader] =  useState(false);

    useEffect(() => {
                
           setProgressLoader(true)

        async function makePostRequest() {
            const request = await Axios.get("https://5f860417c8a16a0016e6a8d5.mockapi.io/classroom")
            setAllCards(request.data);
            setProgressLoader(false);
            return request 
               
        }
        makePostRequest()

    }, []);
    return (
        <div className={classes.BgColor}>
            <div className={classes.ProgressWrapper}> {progressLoader ? <ProgressLoader/>:null}</div>
            <div className={classes.ExtraWidth}></div>
            <div className={classes.ClassRoomContainer}>
                <p className={classes.Offering}>Classroom</p>
                <p className={classes.EnrolledCourse}>Your Enrolled Courses</p>


                <div className={classes.AllCardContainer}>
                    {allCards.map(items => {
                        return <ClassRoomCards key={items.id} imgSrc={items.imgSrc} topic={items.courseName} units={items.units} />
                    })}

                </div>
            </div>

            <div className={classes.BottomExtra}></div>
        </div>
    )
}

export default ClassRoomPage
