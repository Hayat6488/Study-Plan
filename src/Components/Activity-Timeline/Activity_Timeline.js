import React, { useEffect, useState } from 'react';
import Study_Details from '../studyDetails/Study_Details';
import UserInfo from '../UserInfo/UserInfo';
import { addToDB } from '../utilities/storage';

const Activity_Timeline = (props) => {

    const [breakTimeInitial,setBreakTimeInitial] = useState(0);
    
    const addBreakTime = (time) => {
        setBreakTimeInitial(time);
        addToDB(time);
        }
        let breakTime;
        if(breakTimeInitial == 0){
            const a = localStorage.getItem('time');
            breakTime = a;
        }
        else{
            breakTime = breakTimeInitial;
        }
        
        return (
        <div className='sticky top-16'>
            <UserInfo addBreakTime={addBreakTime}></UserInfo>
            <Study_Details completeList={props.completeList} breakTime={breakTime}></Study_Details>
        </div>
    );
};

export default Activity_Timeline;