import React from 'react'
import { Link } from 'react-router-dom';
import './ProblemCard.css';

function ProblemCard({id, course, problem, level, maxScore}) {

    const difficultyLevelColor = {
        'Easy':'#0095FF',
        'Medium':'#FC5AA6',
        'Hard':'8455FC'
    }

    return (
        <Link to={`/courses/${course}/problem/${id}`}>
            <div className="topic" style={{border:`2px solid ${difficultyLevelColor[level]}`}}>
                <span className=" counter-easy " id="counter" style={{backgroundColor:`${difficultyLevelColor[level]}`}}>
                    Problem {id}
                </span>
                <div id="problem-details">
                    <span id="problem-title">
                        <div>{problem}</div>
                        <div>Level : {level}, Max Score : {maxScore}</div>
                    </span>
                    <span id="problem-difficulty">
                        
                            <div id="status">Solve Problem</div>
                        
                    </span>
                </div>    
            </div>
        </Link> 
    )
}

export default ProblemCard
