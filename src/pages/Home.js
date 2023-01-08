import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import style from '../styles/Home.module.css'

function Home() {
  return (
    <>  
    <div className={`p-0 text-center bg-image hero-image ${style.heroImage}`} >
        <div className={style.mask}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'><FontAwesomeIcon icon={faLightbulb} className="me-4 pb-1 d-none d-md-inline" />Vi lyser upp din vardag</h1>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home