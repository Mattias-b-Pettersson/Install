import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className="text-muted">
    <Container className='d-flex justify-content-center align-items-center border-top border-1 py-4'>
        <p className='d-inline m-0 fs-5'>
            © 2021 Install Elteknik AB
        </p>
        <FontAwesomeIcon icon={faSquareFacebook} className=" ms-2 fs-2" />
        <FontAwesomeIcon icon={faInstagram} className="ms-2 fs-2" />
    </Container>
</footer>
  )
}

export default Footer