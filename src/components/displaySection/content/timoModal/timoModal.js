import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Lightbox from 'lightbox-react'
import 'lightbox-react/style.css'

function TimoModal(props) {
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
            {lightbox.isOpen && (
          <Lightbox
            mainSrc={props.posts[lightbox.photoIndex]}
            nextSrc={props.posts[(lightbox.photoIndex + 1) % props.posts.length]}
            prevSrc={props.posts[(lightbox.photoIndex + props.posts.length - 1) % props.posts.length]}
            onCloseRequest={() => setLightbox({ isOpen: false })}
            onMovePrevRequest={() =>setLightbox({photoIndex: (lightbox.photoIndex + props.posts.length - 1) % props.posts.length, isOpen: true})}
            onMoveNextRequest={() =>setLightbox({photoIndex: (lightbox.photoIndex + 1) % props.posts.length, isOpen: true})}
            imageTitle= 'Omar Timo Agency Project @freelancing'
          />
        )}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Omar Timo Agency Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ul className='photoposts'>
                {
           props.posts.map((item, i) => <li key={i} className='photolink'>
          <a className='itemlink' onClick={()=> handleClick(i)}>
              <img className='imgposts' style={{height: '100px', width: '150px' , objectFit: 'cover',  verticalAlign: 'bottom'}} src={item} alt='post'/>
          </a>
      </li>)
}
                </ul>
          <p>
          When the Corona pandemic spread, the world thought it was the end, but humanity tried hard to find other ways to break that condition.
And if we consider that continuing to work and progress is the appropriate way to confront by continuing to provide services and work through the only way that guarantees the safety of everyone, which is electronic commerce.
That is why I developed that special platform for one of the Arab innovators in the field of drawing, so that I and him can make our way to progress.
I am into learning and gaining practical experience, either by presenting his work and communicating with clients.
The site is built entirely with MERN Stack technology
I used everything I had learned in my life in the field of the web.
React.js, Redux, Node.js, Express.js, MongooDB, and Axios.
The publication of the work depends entirely on the purchase and activation of the domain.
          </p>
          <a href="https://github.com/Mahmoudgawish22/DeploymentGAH" target="_blank" className="btn btn-block btn-dark">View Front-End source code on Github!</a>
          <br/>
          <a href="https://omartimo.netlify.app/" target="_blank" className="btn btn-block btn-danger">View it live on netlify!</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        
      </Modal>
      
      </div>
    );
  }
  export default TimoModal