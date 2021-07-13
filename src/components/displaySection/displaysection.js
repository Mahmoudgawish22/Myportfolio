import React from 'react'
import '../displaySection/displaysection.css'
import MernStack from '../../img/o1.png'
import reactprojects from '../../img/r1.png'
import freeCodeCamp from '../../img/c18.png'
import freeCodeCamp1 from '../../img/c16.png'
import freeCodeCamp2 from '../../img/c14.png'
import freeCodeCamp3 from '../../img/c13.png'
import freeCodeCamp4 from '../../img/c12.png'
import freeCodeCamp5 from '../../img/c11.png'
import freeCodeCamp6 from '../../img/c10.png'
import freeCodeCamp7 from '../../img/c9.png'
import freeCodeCamp8 from '../../img/c8.png'
import freeCodeCamp9 from '../../img/c4.png'
import freeCodeCamp10 from '../../img/c3.png'
import freeCodeCamp11 from '../../img/c1.png'
import freeCodeCamp12 from '../../img/g1.png'
import freeCodeCamp13 from '../../img/g13.png'
import freeCodeCamp14 from '../../img/g24.png'

import freeCodeCamp15 from '../../img/c2.png'
import freeCodeCamp16 from '../../img/c5.png'
import freeCodeCamp17 from '../../img/c6.png'
import freeCodeCamp18 from '../../img/c7.png'

import freeCodeCamp19 from '../../img/o2.png'
import freeCodeCamp20 from '../../img/o3.png'
import freeCodeCamp21 from '../../img/o4.png'
import freeCodeCamp22 from '../../img/o5.png'
import freeCodeCamp23 from '../../img/o6.png'
import freeCodeCamp24 from '../../img/o7.png'
import freeCodeCamp25 from '../../img/o8.png'
import freeCodeCamp26 from '../../img/o9.png'
import freeCodeCamp27 from '../../img/o10.png'
import freeCodeCamp28 from '../../img/o11.png'
import freeCodeCamp29 from '../../img/o12.png'
import freeCodeCamp30 from '../../img/o13.png'
import freeCodeCamp31 from '../../img/o14.png'

import freeCodeCamp32 from '../../img/r2.png'
import freeCodeCamp33 from '../../img/r3.png'
import freeCodeCamp34 from '../../img/r4.png'
import freeCodeCamp35 from '../../img/r5.png'
import freeCodeCamp36 from '../../img/r6.png'
import freeCodeCamp37 from '../../img/r7.png'
import freeCodeCamp38 from '../../img/r8.png'
import freeCodeCamp39 from '../../img/r9.png'
import freeCodeCamp40 from '../../img/r10.png'
import freeCodeCamp41 from '../../img/r11.png'
import freeCodeCamp42 from '../../img/r12.png'

import freeCodeCamp43 from '../../img/c20.png'

import freeCodeCamp44 from '../../img/g2.png'
import freeCodeCamp45 from '../../img/g3.png'
import freeCodeCamp46 from '../../img/g4.png'
import freeCodeCamp47 from '../../img/g5.png'
import freeCodeCamp48 from '../../img/g6.png'
import freeCodeCamp49 from '../../img/g7.png'
import freeCodeCamp50 from '../../img/g8.png'
import freeCodeCamp51 from '../../img/g9.png'
import freeCodeCamp52 from '../../img/g10.png'
import freeCodeCamp53 from '../../img/g11.png'
import freeCodeCamp54 from '../../img/g12.png'
import freeCodeCamp55 from '../../img/g14.png'
import freeCodeCamp56 from '../../img/g15.png'
import freeCodeCamp57 from '../../img/g16.png'
import freeCodeCamp58 from '../../img/g17.png'
import freeCodeCamp59 from '../../img/g18.png'
import freeCodeCamp60 from '../../img/g19.png'
import freeCodeCamp61 from '../../img/g20.png'
import freeCodeCamp62 from '../../img/g21.png'
import freeCodeCamp63 from '../../img/g22.png'
import freeCodeCamp64 from '../../img/g23.png'

import NativeModal from '../displaySection/content/nativeModal/native'
import D3Modal from '../displaySection/content/d3Modal/d3'
import ReactModal from '../displaySection/content/reactCModal/reactModal'
import GpModal from '../displaySection/content/GPModal/gpModal'
import RwmgModal from '../displaySection/content/RWMGModal/rwmgModal'
import TimoModal from '../displaySection/content/timoModal/timoModal'

function Display(props) {
    const [nativeModalShow, setNativeModalShow] = React.useState(false);
    const [d3ModalShow, setD3ModalShow] = React.useState(false);
    const [reactModalShow, setReactModalShow] = React.useState(false);
    const [gpModalShow, setGpModalShow] = React.useState(false);
    const [rModalShow, setRModalShow] = React.useState(false);
    const [timoModalShow, setTimoModalShow] = React.useState(false);

    const posts = [MernStack, reactprojects, freeCodeCamp, freeCodeCamp1, freeCodeCamp2, freeCodeCamp3, freeCodeCamp4,
        freeCodeCamp5, freeCodeCamp6, freeCodeCamp7, freeCodeCamp8, freeCodeCamp9, freeCodeCamp10, freeCodeCamp11, 
        freeCodeCamp12, freeCodeCamp13, freeCodeCamp14];

    const native = [freeCodeCamp9, freeCodeCamp10, freeCodeCamp11, freeCodeCamp15, freeCodeCamp16, freeCodeCamp17,
            freeCodeCamp18];

    const reactC = [freeCodeCamp8, freeCodeCamp7, freeCodeCamp6, freeCodeCamp5, freeCodeCamp4];

    const timo = [MernStack, freeCodeCamp19, freeCodeCamp20, freeCodeCamp21, freeCodeCamp22, freeCodeCamp23, freeCodeCamp24, 
        freeCodeCamp25, freeCodeCamp26, freeCodeCamp27, freeCodeCamp28, freeCodeCamp29, freeCodeCamp30, freeCodeCamp31];
    
    const RWMG = [reactprojects, freeCodeCamp32, freeCodeCamp33, freeCodeCamp34, freeCodeCamp35, freeCodeCamp36, 
        freeCodeCamp37, freeCodeCamp38, freeCodeCamp39, freeCodeCamp40, freeCodeCamp41, freeCodeCamp42];

    const d3 = [freeCodeCamp3, freeCodeCamp2, freeCodeCamp1, freeCodeCamp, freeCodeCamp43];

    const graduation = [freeCodeCamp12, freeCodeCamp44, freeCodeCamp45, freeCodeCamp46, freeCodeCamp47, freeCodeCamp48,
        freeCodeCamp49, freeCodeCamp50, freeCodeCamp51, freeCodeCamp52, freeCodeCamp53, freeCodeCamp54, freeCodeCamp55, 
        freeCodeCamp56, freeCodeCamp57, freeCodeCamp58, freeCodeCamp59, freeCodeCamp60, freeCodeCamp61, freeCodeCamp62, 
        freeCodeCamp63, freeCodeCamp64, freeCodeCamp13, freeCodeCamp14];
    
    const handelClick = (i) => {
        if (i == 0) {
            setTimoModalShow(true)
        } else if (i == 1) {
            setRModalShow(true)
        } else if (i==2 | i==3 | i==4 | i==5) {
            setD3ModalShow(true)
        } else if (i==6 | i==7 | i==8 | i==9 | i==10) {
            setReactModalShow(true)
        } else if (i==11 | i==12 | i==13) {
            setNativeModalShow(true)
        } else {
            setGpModalShow(true)
        }
    }
    return (
        <div id='Display'>
            <div id='nav'>
                <p className="nav-link0"><i class="far fa-file-code"></i> Development Works</p>
            </div>
            <div id='allContent'>
            <ul className='photoposts'>
                {
           posts.map((item, i) => <li key={i} className='photolink'>
          <a className='itemlink' onClick={()=> handelClick(i)}>
              <img className='imgposts' style={{height: '200px', width: '250px' , objectFit: 'cover',  verticalAlign: 'bottom'}} src={item} alt='post'/>
          </a>
      </li>)
}
                </ul>
            </div>
            <NativeModal
        show={nativeModalShow}
        closethis = {setNativeModalShow}
        posts = {native}
        onHide={() => setNativeModalShow(false)}
      />
      <D3Modal
        show={d3ModalShow}
        closethis = {setD3ModalShow}
        posts = {d3}
        onHide={() => setD3ModalShow(false)}
      />
      <ReactModal
        show={reactModalShow}
        closethis = {setReactModalShow}
        posts = {reactC}
        onHide={() => setReactModalShow(false)}
      />
      <GpModal
        show={gpModalShow}
        closethis = {setGpModalShow}
        posts = {graduation}
        onHide={() => setGpModalShow(false)}
      />
      <RwmgModal
        show={rModalShow}
        closethis = {setRModalShow}
        posts = {RWMG}
        onHide={() => setRModalShow(false)}
      />
      <TimoModal
        show={timoModalShow}
        closethis = {setTimoModalShow}
        posts = {timo}
        onHide={() => setTimoModalShow(false)}
      />
        </div>
    )
}
export default Display