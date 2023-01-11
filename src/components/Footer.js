import { faSquareFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Image } from 'react-bootstrap'
import styles from "../styles/Footer.module.css"
import kollaelforetaget from '../assets/logos/logotyp-kollaelforetaget-webb.png' 


const Footer = () => {
  return (
    <footer className="text-muted">
    <Container className='d-flex border-top border-1 py-4'>
        <p className='mx-0 fs-5'>
            © 2021 Install Elteknik AB
        </p>
        <div className='mx-auto'>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSquareFacebook} className={`${styles.icon} fs-2 mx-1`} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagramSquare} className={`${styles.icon} fs-2 mx-1`} />
            </a>
        </div>
        <a href='https://www.elsakerhetsverket.se/kollaelforetaget/foretagsregister/?foretag=11069129&sok=1' target="_blank" rel="noreferrer">
                <Image src={kollaelforetaget} height="40" className='p-0 m-0 mx-1 d-inline'/>
          </a>
    </Container>
</footer>
  )
}

export default Footer