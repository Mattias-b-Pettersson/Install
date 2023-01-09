import React from 'react'
import { Card, Carousel, CarouselItem } from 'react-bootstrap';
import ladder from '../assets/carouselimages/ladder.jpg';
import chargeBox from '../assets/carouselimages/charge-box.jpg';
import fusebox from '../assets/carouselimages/fusebox.jpg';
import mainFuseBox from '../assets/carouselimages/main-fusebox.jpg';
import style from '../styles/Carousel.module.css'

export default function Carousels() {
  return (
    <Carousel className={`${style.carouselOuter} mx-auto`}>
    <CarouselItem>
    <Card className={`${style.carouselItem}`}>
      <Card.Img src={ladder} />
      <Card.ImgOverlay className={` ${style.mask} d-flex align-items-end`}>
        <Card.Text className='w-100'>
          Vi hjälper till med installation av nya armaturer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </CarouselItem>
    <CarouselItem>
    <Card className={`${style.carouselItem}`}>
      <Card.Img src={chargeBox} />
      <Card.ImgOverlay className={` ${style.mask} d-flex align-items-end`}>
        <Card.Text className='w-100'>
          Börjar din bil få slut på batteri? Hör av dig så installerar vi en laddare.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </CarouselItem>
    <CarouselItem>
    <Card className={`${style.carouselItem}`}>
      <Card.Img src={fusebox} />
      <Card.ImgOverlay className={` ${style.mask} d-flex align-items-end`}>
        <Card.Text className='w-100'>
          Behov av nytt proppskåp? Vi hjälper dig!
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </CarouselItem>
    <CarouselItem>
    <Card className={style.carouselItem}>
      <Card.Img src={mainFuseBox} />
      <Card.ImgOverlay className={` ${style.mask} d-flex align-items-end`}>
        <Card.Text className='w-100'>
          Vi hjälper till med både stora och små projekt
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </CarouselItem>
  </Carousel>
  )
}