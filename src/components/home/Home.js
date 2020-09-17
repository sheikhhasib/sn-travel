import React from 'react';
import Cox from './cox\'s bazar/Cox';
import './Home.css';
const Home = (props) => {
    return (
        <div className="homeBackground">
            <div className="main-content">
               <Cox setCity={props.setCity}></Cox>
            </div>
        </div>
    );
};

export default Home;