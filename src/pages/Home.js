import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faChargingStation, faLightbulb, faSink, faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import style from '../styles/Home.module.css'
import { Link } from 'react-router-dom';
import Carousels from '../components/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion";


function Home() {

  return (
    <>  
      <div className={`p-0 text-center bg-image hero-image ${style.heroImage}`} >
          <div className={style.mask}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.4, 0.8, 0.6, 1.01]
                }}>
                <h1 className='mb-3'><FontAwesomeIcon icon={faLightbulb} className="me-4 pb-1 d-none d-md-inline" />Vi lyser upp din vardag</h1>
                <Link className={`btn btn-outline-light btn-lg ${style.heroButton}`} to="/install/kontakt" role='button'>
                  Kontakta oss
                </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      <Container>
        <Row className='mt-3'>
            <Col md={6} lg={3}>
                  <h3 className='d-block'>
                    <FontAwesomeIcon icon={faTemperatureArrowUp} className={`me-1 ${style.orangeIcon}`} />
                    Värmegolv
                  </h3>
                  <p className='text-muted'>
                    Upplev lyxen av varma golv med våra tjänster för installation av uppvärmt golv. Våra expertelektriker kommer att arbeta med dig för att designa en anpassad lösning för uppvärmt golv som möter dina behov och budget.
                  </p>
            </Col>
            <Col md={6} lg={3}>
                <h3 className='d-block'>
                  <FontAwesomeIcon icon={faSink} className={`me-1 ${style.orangeIcon}`} />
                  Badrum
                </h3>
                <p className='text-muted'>
                  Uppgradera ditt badrum med våra professionella tjänster för badrumsinstallation. Våra elektriker är erfarna inom alla aspekter av badrumsinstallation, inklusive belysning, ventilation och elarbete.
                </p>
            </Col>
            <Col md={6} lg={3}>
                <h3 className='d-block'>
                  <FontAwesomeIcon icon={faChargingStation} className={`me-1 ${style.orangeIcon}`} />
                  Laddbox
                </h3>
                <p className='text-muted'>
                  Håll din elbil laddad och redo att köra med våra tjänster för installation av laddbox. Våra elektriker kommer att installera en säker och pålitlig laddbox i ditt hem eller företag, så att din EV alltid är redo för din nästa resa.
                </p>
            </Col>
            <Col md={6} lg={3}>
                <h3 className='d-block'>
                  <FontAwesomeIcon icon={faBolt} className={`me-1 ${style.orangeIcon}`} />
                  Elsäkerhet
                </h3>
                <p className='text-muted'>
                  Håll ditt hem eller företag säkert med våra tjänster för el-säkerhet.
                Våra elektriker kommer att utföra en grundlig inspektion av din elektriska anläggning och göra eventuella nödvändiga reparationer eller uppgraderingar för att säkerställa att den möter alla säkerhetsstandarder.
                </p>
            </Col>
          </Row>
        <Row className={`mx-0 pb-4 ${style.orangeGradientBg} d-flex justify-content-center`}>
          <Col xs={12} md={6} className='order-md-2'>
            <Carousels />
          </Col>
          <Col xs={12} md={6} className='d-flex align-items-center '>
            <p className="text-center lead mt-3">
              Install Elteknik, baserat i Stockholm, erbjuder ett brett utbud av elektriska tjänster för både bostäder och kommersiella fastigheter.
              Från installationer och reparationer till underhåll och besiktningar har vi kunskapen och expertisen att hantera alla dina elektriska behov.
              Vi är stolta över vår noggrannhet, tidsenlig service och engagemang för kundnöjdhet.
              Vårt team av certifierade och erfarna elektriker är alltid redo att hjälpa dig med alla elektriska problem du kan stå inför.
              Kontakta oss idag för alla dina elektriska behov i Stockholm och omgivande områden.
            </p>
            
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home