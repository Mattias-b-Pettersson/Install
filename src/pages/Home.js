import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import style from '../styles/Home.module.css'
import { Link } from 'react-router-dom';
import Carousels from '../components/Carousel';
import { Col, Container, Row } from 'react-bootstrap';


function Home() {
  return (
    <>  
      <div className={`p-0 text-center bg-image hero-image ${style.heroImage}`} >
          <div className={style.mask}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'><FontAwesomeIcon icon={faLightbulb} className="me-4 pb-1 d-none d-md-inline" />Vi lyser upp din vardag</h1>
                <Link className={`btn btn-outline-light btn-lg ${style.homeButton}`} to="/install/kontakt" role='button'>
                  Kontakta oss
                </Link>
              </div>
            </div>
          </div>
        </div>
      <Container>
      <Row className={`mx-0 pb-4 ${style.orangeGradientBg} d-flex justify-content-center`}>
        <Col xs={10} lg={6} className='d-flex align-items-center '>
          <p className="px-md-5 text-center my-5 lead">
            Install Elteknik, baserat i Stockholm, erbjuder ett brett utbud av elektriska tjänster för både bostäder och kommersiella fastigheter.
            Från installationer och reparationer till underhåll och besiktningar har vi kunskapen och expertisen att hantera alla dina elektriska behov.
            Vi är stolta över vår noggrannhet, tidsenlig service och engagemang för kundnöjdhet.
            Vårt team av certifierade och erfarna elektriker är alltid redo att hjälpa dig med alla elektriska problem du kan stå inför.
            Kontakta oss idag för alla dina elektriska behov i Stockholm och omgivande områden.
          </p>
        </Col>
        <Col xs={10} md={6} xl={5} className=''>
          <Carousels />
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Home