import React, { Component } from 'react';
import classes from './TopicDetailsPage.module.css';
import axios from 'axios';
import { MainHeading } from '../../Components/Heading/Heading';
import TopicDetailsCard from '../../Components/TopicDetailsCard/TopicDetailsCard';

class TopicDetailsPage extends Component{
    
    state = {
        courseList:[],
    }

    componentDidMount(){
        axios.get("https://5ee9fc4aca5957001602a6b7.mockapi.io/edyoda-app")
        .then(response => {
            this.setState({courseList:[...response.data]});
        })
        .catch(err => {
            console.log('Call Failed!!');
        })
    }
    
    render(){
        return(
            <div className={classes.TopicDetailsWrapper}>
                Topic Details Page
                <div className={classes.CourseInfo}>
                      <img src={this.state.Courselogo}/>
                      <div>
                         <MainHeading label={this.state.Coursetitle} />                            
                      </div>             
                 </div>
                 <div className={classes.TopicName}>
                    {
                        this.state.courseList.map(item => {
                            return <TopicDetailsCard key={item.id} id={item.id} 
                            topic={topicDetailsPage[topic]}
                            status={topicDetailsPage[status]}  />
                        })
                    }
                </div>
                 </div>   
           
        )
    }
}
export default TopicDetailsPage;