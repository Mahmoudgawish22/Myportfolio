import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Lightbox from 'lightbox-react'
import 'lightbox-react/style.css'

function NativeModal(props) {
    const [lightbox, setLightbox] = React.useState({
        photoIndex: 0,
        isOpen: false,
    })
    const handleClick = (i) => {
        props.closethis(false);
        setLightbox({photoIndex: i, isOpen: true})
    }

    return (
      <div>
        {props?.data?.album?.length > 1?
        <>
        {lightbox.isOpen && (
        <Lightbox
          mainSrc={props?.data?.album[lightbox.photoIndex]}
          nextSrc={props?.data?.album[(lightbox.photoIndex + 1) % props?.data?.album.length]}
          prevSrc={props?.data?.album[(lightbox.photoIndex + props?.data?.album?.length - 1) % props?.data?.album?.length]}
          onCloseRequest={() => setLightbox({ isOpen: false })}
          onMovePrevRequest={() =>setLightbox({photoIndex: (lightbox.photoIndex + props?.data?.album?.length - 1) % props?.data?.album?.length, isOpen: true})}
          onMoveNextRequest={() =>setLightbox({photoIndex: (lightbox.photoIndex + 1) % props?.data?.album?.length, isOpen: true})}
          imageTitle= {props?.data?.title}
        />
        )}
        </>:null}
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props?.data?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <ul className='photoposts'>
                {
                  props?.data?.album?.map((item, i) => 
                  <li key={i} className={props?.data?.album?.length > 1? 'photolink':''}>
                    <a className='itemlink' onClick={()=> props?.data?.album?.length > 1? handleClick(i):null}>
                      <img className='imgposts' style={{height: '100px', width: '150px' , objectFit: 'contain',  verticalAlign: 'bottom'}} src={item} alt='post'/>
                    </a>
                  </li>
                )}
              </ul>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <p style={{textAlign: 'left', margin: '0px', fontWeight:'bold'}}>
                {props?.data?.desc}
              </p>
              {props?.data?.role?
              <p style={{textAlign: 'left', margin: '0px'}}>
                Role: <span style={{borderBottom: '1px solid #333', padding: '0px 5px 0px 5px'}}>{props?.data?.role}</span>
              </p>:null
              }
              {props?.data?.frontEnd?.length?
              <p style={{textAlign: 'left', margin: '0px'}}>
                Front-End Tools: {props?.data?.frontEnd?.join(', ')}
              </p>:null
              }
              {props?.data?.backEnd?.length?
              <p style={{textAlign: 'left', margin: '0px'}}>
                Back-End Tools: {props?.data?.backEnd?.join(', ')}
              </p>:null
              }
              {props?.data?.startDate?
              <p style={{textAlign: 'left', margin: '0px'}}>
                {props?.data?.endDate? 'Start Date': 'Date'}: {props?.data?.startDate}
              </p>:null
              }
              {props?.data?.endDate?
              <p style={{textAlign: 'left', margin: '0px'}}>
                End Date: {props?.data?.endDate}
              </p>:null
              }
              </div>
              <div style={{display: 'flex', alignItems:'center', justifyContent:'center', gap:'10px'}}>
              {props?.data?.links?.github?
              <a href={props?.data?.links?.github} target="_blank" className="btn btn-block btn-dark">View source code!</a>:
              null
              }
              <br/>
              {props?.data?.links?.live?
              <a href={props?.data?.links?.live} target="_blank" className="btn btn-outline-dark">View Live</a>:
              null}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      
      </div>
    );
  }
  export default NativeModal