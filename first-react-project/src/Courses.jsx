import React from "react";

export const Courses = ({ ctype })=>{
    const backendCourses=["NodeJs","ExpressJS","Java"];
    const frontendCourses=["ReactJS","HTML","CSS"];
    return(
        <div>
            <h1>Courses</h1>
            <p>welcome to the courses page!</p>

        <ul>
            {
                ctype == 'backend' ?
                backendCourses.map((course,index)=><li key={index}>{course}</li>):
                frontendCourses.map((course,index)=><li key={index}>{course}</li>)
            }
        </ul>

        </div>

    )
}

