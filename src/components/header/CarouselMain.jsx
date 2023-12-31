import Carousel from 'react-bootstrap/Carousel';


function CarouselMain() {
  return (
    <Carousel fade className='not-arrow' indicators={false} interval={3000}>
      <Carousel.Item>
        <img className='d-block w-100' src="carnaval-1.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src="carnaval-2.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src="triadadeltrueno.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;