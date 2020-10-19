import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProblemCard from '../../Components/ProblemCard/ProblemCard';
import './ProblemsPage.css';

function ProblemsPage(props) {
    const {courseTitle:course, topicId } = props.match.params;
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        axios.get("https://5f8ca8b7c7aadb001605e529.mockapi.io/problems")
        .then(response => {
           const allProblems = response.data[0];
           setProblems(allProblems[course]);
           console.log(allProblems[course]);
           console.log();
        })
        .catch(err => {
            console.log('Call Failed!!');
        })
    }, [])

    return (
        <div className="container course">
    
	<Link to = {`/courses/${course}`} className="header">Python</Link> {' > '}
    
    <Link to={`/courses/${course}/${topicId}`} className="header">Operators and Conditional Statements</Link> {' > '}
 
    <div className="row">
        <div className="col-10 problem-header">
            <h2 style={{marginTop:'1rem'}}>Problems</h2>
        </div>
    </div>
        
        {problems.map( ({id, problem, level, maxScore }) =>
            <ProblemCard 
                key={id}
                id={id}
                course={course}
                problem={problem}
                level={level}
                maxScore={maxScore}
            />
        )}

    </div>
    );
}
export default ProblemsPage;