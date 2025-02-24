import React from 'react';
import { faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from '../styles/ContactForm.module.css';
import { motion } from "framer-motion";

function ContactForm() {
    return (
        <div className={`pt-5 m-0 ${styles.formOuter}`}>
            <Container>
                <Row className='mx-0'>
                    <Col xs={12} md={8} xl={4} className={`d-flex mb-4 justify-content-center ${styles.kontakt}`} >
                        <div className='align-self-center font-5'>
                            <div className='mb-4 mb-lg-5'>
                            <h3 className="me-2 d-inline"><FontAwesomeIcon icon={faPhone} className="me-1" /></h3>
                            <h3 className="me-1 d-inline">Telefon <br /> 0763 380 400</h3>
                            </div>
                            <div className='mt-4 mt-lg-5'>
                            <h3 className="me-3 d-inline"><FontAwesomeIcon icon={faEnvelope} /></h3>
                            <h3 className="me-1 d-inline">Mail <br /><a href="mailto:robert@install-elteknik.se"> kontakt@install-elteknik.se</a></h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={8} xl={6} className={`${styles.form} mb-4`}>
                        <h1 className='mb-4 ms-2'>Skicka ett mail</h1>
                        <Form onSubmit={(event) => {event.preventDefault()}}>
                            <Row>
                                <Col xs={12} xl={6} className="px-4">
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label><h3>Email adress</h3></Form.Label>
                                        <Form.Control type="email" placeholder="Skriv din email" />
                                        <Form.Text className="text-muted">
                                        Vi håller din email adress till oss själva.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} xl={6} className="px-4">
                                    <Form.Group className="mb-3" controlId="telefonnummer">
                                        <Form.Label><h3 className=''>Telefonnummer</h3></Form.Label>
                                        <Form.Control type="tel" placeholder="Telefonnummer" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="px-4">
                                    <Form.Group className="mb-3" controlId="telefonnummer">
                                        <Form.Label><h3 className=''>Meddelande</h3></Form.Label>
                                        <Form.Control as="textarea" rows={5} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}                                    
                                    className={`text-white`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <p className='m-0'>Skicka<FontAwesomeIcon icon={faPaperPlane} className="ms-2 fs-5" /></p>
                                </motion.button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
  
  export default ContactForm;