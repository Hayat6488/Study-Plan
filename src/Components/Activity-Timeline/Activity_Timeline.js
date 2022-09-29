import React from 'react';
import Study_Details from '../studyDetails/Study_Details';
import UserInfo from '../UserInfo/UserInfo';

const Activity_Timeline = (props) => {
    return (
        <div className='sticky top-16'>
            <UserInfo></UserInfo>
            <Study_Details completeList={props.completeList}></Study_Details>
        </div>
    );
};

export default Activity_Timeline;