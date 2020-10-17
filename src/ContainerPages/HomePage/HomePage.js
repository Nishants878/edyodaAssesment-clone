import React, { Component } from 'react';
import axios from 'axios';
import classes from './HomePage.module.css';
import { MainHeading } from '../../Components/Heading/Heading';
import { SubHeading } from '../../Components/Heading/Heading';
import CourseCard from '../../Components/CourseCard/CourseCard';
import ProgressLoader from '../../Components/ProgressLoaderSection/ProgressLoaderSection';

export default class HomePage extends Component{
    state = {
        courseList:[],
        progressLoader:false,
    }

    componentDidMount(){

        this.setState({ progressLoader: true });
        axios.get("https://5ee9fc4aca5957001602a6b7.mockapi.io/edyoda-app")
        .then(response => {
            this.setState({courseList:[...response.data]});

            this.setState({ progressLoader: false });
        })
        .catch(err => {
            console.log('Call Failed!!');

            this.setState({ progressLoader: false });
        })
    }

    render()
    {
        return(
            <div className={classes.HomePageContainer}>
                <div className={classes.ProgressWrapper}> {this.state.progressLoader ? <ProgressLoader /> : null}</div>
               
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
