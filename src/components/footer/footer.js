import React from 'react'
import '../footer/footer.css'
import logo from '../../img/books.png'

function Footer() {
    return (
              <div id='footer'>
                  <div className='footercontent'>
                  <div id='footerlogo'>
                  <img id='logo' src={logo} alt='Logo'/>
                  </div>
                  <hr style={{width: '30%', color: 'white'}}/>
                  <p className='icondiscrbfooter'>
                      Mahmoud Gawish Portfolio
                      <br/>
                      The entire website was designed using React.js
                      <br/>
                      <br/>
                      How do you drink your Coffee?
                      <br/>
                      (+971) 569871498
                      <br/>
                      <br/>
                      <span style={{color: 'white'}}> © 2021 ALL RIGHT RESEVED </span>
                  </p>
                  </div>
              </div>
    );
  }
  export default Footer;