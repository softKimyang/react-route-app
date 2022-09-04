import React from 'react';
import { useParams } from 'react-router-dom';
// react-router-dom V6에서는 element로 컴포넌트를 만들고, route(match, history, location)을 받지 않는다.
// useParams, useLocation, useHistory 를 사용한다.
const About = () => {
    const {username} = useParams();
    return (
        <div>
            {username} 의 정보
        </div>
    );
};

export default About;