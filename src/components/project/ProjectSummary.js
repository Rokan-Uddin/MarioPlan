import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className='card z-depth-0 project-summery'>
             <div className='card-content grey-text text-darken-3'>
                <span className='card-title'> {project.title} </span>
                <p>Posted by Rokan</p>
                <p className='grey-text'>05 december,2020</p>
            </div>
        </div>
    );
}
export default ProjectSummary;