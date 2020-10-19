import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CourseCard from '../../Components/CourseCard/CourseCard';
import ProgressLoader from '../../Components/ProgressLoaderSection/ProgressLoaderSection';
import { Link } from 'react-router-dom';
import './HomePage.css';

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
            <Fragment>
                <div className="course-page"> {this.state.progressLoader ? <ProgressLoader /> : null}</div>
               
                <p id="offering">Practice Arena</p>
                <p id="skill-status">All Skills</p>
                <div id="skill-cards">  
                    {this.state.courseList.map(item =>
                        <div className="card-container" key={item.id}>
                            <Link className="course-card-nav-link"
                                
                                to={`/courses/${item.Coursetitle}`}
                            >
                                <CourseCard  
                                    Courselogo={item.Courselogo} 
                                    Coursetitle={item.Coursetitle} 
                                    CourseUnits={item.CourseUnits} 
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </Fragment>
        );
    }
}
