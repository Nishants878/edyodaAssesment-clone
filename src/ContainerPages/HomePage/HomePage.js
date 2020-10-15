import React, { Component } from 'react';
import axios from 'axios';
import classes from './HomePage.module.css';
import { MainHeading } from '../../Components/Heading/Heading';
import { SubHeading } from '../../Components/Heading/Heading';
import CourseCard from '../../Components/CourseCard/CourseCard';

export default class HomePage extends Component{
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

    render()
    {
        return(
            <div className={classes.HomePageContainer}>
                <MainHeading label="Practice Arena" />
                <SubHeading label="All Skills" />
                <div className={classes.CourseContainer}>
                    {
                        this.state.courseList.map(item => {
                            return <CourseCard key={item.id} id={item.id} Courselogo={item.Courselogo} Coursetitle={item.Coursetitle} CourseUnits={item.CourseUnits} />
                        })
                    }
                </div>
            </div>
        );
    }
}
