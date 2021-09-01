import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Lightbox from 'lightbox-react'
import 'lightbox-react/style.css'

function PlaceholderModal(props) {
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
            imageTitle= 'Data Visualization Projects @freeCodeCamp'
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
            Placeholder Project
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
          In August of 2021, and in an effort to develop my practical experience, and to suit the working market more and more, I decided to work on a Full E-Commerce store, in terms of planning its system,
          and by accessing the application methods, I found that the business should be divided as follows, a set of records on MongooDB containing users, products, companies, offers, orders, returns, and also sales.
          And then I touched on the process of building the APIs, which was very hard and took a lot of time to control and building all, So that the designing and developmenting the Front-End pages.</p>
          <p>
          In our current world, the demands of Ecommerce stores have increased, and far from the idea of ​​​​designing them with tools that make programming like templates, it is possible to develop one that smells of real programming..
          The entire app was designed using React.js, Redux, Express.js, MongooDB, Mongoose, Axios, Node.js.
          </p>
          <a href="https://github.com/Mahmoudgawish22/placeholderStore" target="_blank" className="btn btn-block btn-dark">View Front-End source code on Github!</a>
          <br/>
          <a href="https://placeholder-store.netlify.app/" target="_blank" className="btn btn-block btn-danger">View It Like On Netlify!</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        
      </Modal>
      
      </div>
    );
  }
  export default PlaceholderModal