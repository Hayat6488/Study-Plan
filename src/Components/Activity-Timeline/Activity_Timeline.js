import React, { useState } from 'react';
import Study_Details from '../studyDetails/Study_Details';
import UserInfo from '../UserInfo/UserInfo';
import { addToDB } from '../utilities/storage';

const Activity_Timeline = (props) => {

    const [breakTime,setBreakTime] = useState(0);
    
    const addBreakTime = (time) => {
        setBreakTime(time);
        addToDB(time);
        
        }
        


    return (
        <div className='sticky top-16'>
            <UserInfo addBreakTime={addBreakTime}></UserInfo>
            <Study_Details completeList={props.completeList} breakTime={breakTime}></Study_Details>
        </div>
    );
};

export default Activity_Timeline;