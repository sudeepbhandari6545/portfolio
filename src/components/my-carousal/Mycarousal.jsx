import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './my-carousal.style.css';

const MyCarousal = () => {
  return (
    <>
      <div id="home">
        <Carousel
          controls={false}
          indicators={false}
          interval={2000}
          pause={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={process.env.PUBLIC_URL + '/Image/slide1.webp'}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={process.env.PUBLIC_URL + '/Image/slide2.webp'}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={process.env.PUBLIC_URL + '/Image/slide3.webp'}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default MyCarousal;
