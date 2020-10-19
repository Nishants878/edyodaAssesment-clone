import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './TopicDetails.css';
import TopicDetailsCard from '../../Components/TopicDetailsCard/TopicDetailsCard';

function TopicDetailsPage(props) {

    const [course, setCourse] = useState({title:'', score:'', imgUrl:''});
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get("https://5f8ca8b7c7aadb001605e529.mockapi.io/topics")
        .then(response => {
            const courses = response.data[0];
            const title = props.match.params.courseTitle;
            const { score, topics, imgUrl } = courses[title];
            setCourse({title, score, imgUrl});
            setTopics(topics);
        })
        .catch(err => {
            console.log('Call Failed!!');
        })
    }, []);

    return(
        <div className="student-dashboard-page">
            <div className="student-dashboard-card">
                <div className="sd-card-profile-container"> 
                    {!!course.imgUrl && <img className="sd-card-profile-icon" src={course.imgUrl} alt="course_img"/>}
                    <div className="sd-card-tags-container">
                        <div className="sd-card-name-batch-container">
                            <div className="sd-card-batch-id">
                                {course.title}
                            </div>
                        </div>
    
                        <div className="sd-card-other-details">
                            <div className="avg-score">
                                {!!course.score && 
                                <Fragment>
                                    <span className="details-value">{course.score} %</span>
                                    <span className="details-tag">Avg. Score</span>
                                </Fragment>
                                }
                            </div>  
                        </div>
                    </div>
                </div>
                

                <div className="sd-card-assignment-status">
                {topics.length===0 ? 
                    <div style={{ fontSize:'20px', marginBottom:'40px', fontWeight:'bold'}}>No Topics Available</div> :
                    topics.map((topic, index) =>
                    <Fragment key={index}>
                        <TopicDetailsCard
                            courseTitle={course.title}
                            key={index}
                            id={index+1}
                            name={topic.name}
                            status={topic.status}
                        />
                        <hr />
                    </Fragment>
                )}
                </div>


            </div>
        </div>
        )
}
export default TopicDetailsPage;