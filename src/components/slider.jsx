import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import { data } from '../assets/slider.js';

export const Slider = () => {


  
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }


    return  <Carousel
    data={data}
    time={2000}
    width="100%"
    height="510px"
    
    radius="10px"
    slideNumber={true}
    slideNumberStyle={slideNumberStyle}
    captionPosition="bottom"
    automatic={true}
    dots={true}
    pauseIconColor="white"
    pauseIconSize="40px"
    slideBackgroundColor="darkgrey"
    slideImageFit="cover"
    thumbnails={true}
    thumbnailWidth="100px"
    style={{
      textAlign: "center",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "40px auto",
    }}
  />



}