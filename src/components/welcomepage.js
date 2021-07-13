import React from 'react'
import '../components/welcomepage.css'
import MainHeader from '../components/mainHeader/mainheader'
import Header from './header/header'
import Display from '../components/displaySection/displaysection'
import Footer from '../components/footer/footer'

function WelcomePage(props) {
    return (
        <div id='welcomepage' style={{backgroundColor:'#fff',width: '100%', overflow: 'hidden'}}>
           <Header/>
           <MainHeader/>
           <Display/>
           <Footer/>
        </div>
    )
}
export default WelcomePage