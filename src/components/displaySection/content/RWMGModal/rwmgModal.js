import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Lightbox from 'lightbox-react'
import 'lightbox-react/style.css'

function RwmgModal(props) {
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
            imageTitle= 'Read With Mg Project @freelancing'
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
          Read With Mg Project
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
                I have the talent of writing, which is a corner of comfort for me, and it also became a side profession after reaching a high stage of development in it.
Also, I am a software engineer, who loves to learn and develop, and hopes to become a good engineer in the future.
That's why I wanted so badly throughout my college years and afterwards to combine the two fields by developing a platform to write articles, and also to sell my novels and stories on it.
This site is built entirely using React.js
However, it is not completed yet
          </p>
          <a href="https://github.com/Mahmoudgawish22/Read-With-MG" target="_blank" className="btn btn-block btn-dark">View source code on Github</a>
          <br/>
          <a href="https://read-with-mg.netlify.app/" target="_blank" className="btn btn-block btn-danger">View it live on netlify!</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        
      </Modal>
      
      </div>
    );
  }
  export default RwmgModal