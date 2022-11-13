import React from 'react'
import '../mainHeader/mainheader.css'
import logo from '../../img/IMG_6953.jpeg'

function MainHeader(props) {
    return (
        <div id='mainHeader'>
            <div id='mainHeaderContent'>
                <p id='getStarted1'>Hi, I am Mahmoud Gawish, I am a Software Engineer</p>
                <p id='getStarted2'>Front-End with React.js and Redux, Back-End with Express.js and Node.js</p>
                <a id='explore' className='btn btn-block btn-secondary btn-lg' href='#Display'>Explore Works!</a>
            </div>
            <div className='image_wrapper'>
                <img src={logo} id="me"/>
            </div>
        </div>
    )
}
export default MainHeader