import { faSquareFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import styles from "../styles/Footer.module.css"
import kollaelforetaget from '../assets/logos/logotyp-kollaelforetaget-webb.png' 


const Footer = () => {
  return (
    <footer className="text-muted">
    <Container className='border-top border-1 py-4'>
        <Row>
            <Col xs={12} md={4} className='d-flex justify-content-center align-items-center'>
                <p className='m-0 fs-5 d-inline'>
                    Install Elteknik AB
                </p>
            </Col>
            <Col xs={12} md={4} className='d-flex justify-content-center align-items-center'>
                <div className=''>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faSquareFacebook} className={`${styles.icon} fs-2 mx-1`} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagramSquare} className={`${styles.icon} fs-2 mx-1`} />
                    </a>
                </div>
            </Col>
            <Col xs={12} md={4} className='d-flex justify-content-center align-items-center'>
                <a href='https://www.elsakerhetsverket.se/kollaelforetaget/foretagsregister/?foretag=11069129&sok=1' target="_blank" rel="noreferrer">
                    <Image src={kollaelforetaget} height="40" className='p-0 m-0 mx-1 d-inline'/>
                </a>
            </Col>
          </Row>
    </Container>
</footer>
  )
}

export default Footer