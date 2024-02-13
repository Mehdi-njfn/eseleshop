import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'

import img1 from '../asset/b903db7475af8cddc3a22d6ef7ca5297.webp';
import img2 from '../asset/eb3fe05e201f0e7c2c59443e82a9787b.webp';
import img3 from '../asset/1f9b7cbdfa9815a36385cd440e7374bb.webp';
import img4 from '../asset/22660ca77349a8b776b2e344127f7b99.webp';
import img5 from '../asset/4eda00e02b2af8823835aa36177e1d9e.webp';
import img6 from '../asset/c2d4c2309e93d06526627d5f47e2b431.webp';
import img7 from '../asset/c677240a6f1ef4a89c057e532a53eca9.webp';
import img8 from '../asset/e9f42bced8275e9933ed1d93c03f9bcc.webp';
import img9 from '../asset/64dad0bbd8af2f46a4d46c0d41882dd0.webp';
import img10 from '../asset/7741e41d556cd7d7e6cca6ec2430d661.webp';
import img11 from '../asset/7d32d0684e10b6bcdc4d5c04a44d980e.webp';
import img12 from '../asset/63fbe73e13993946dc4942001a6dde08.webp';

import './home.css';

const responsive = {
  0: { items: 3 },
  568: { items: 3 },
  768: { items: 4 },
};

const Home = () => {
  return (
    <>
      <div className="first-section md:hidden w-[100%]">
        <AliceCarousel infinite autoPlayStrategy='all' disableDotsControls disableButtonsControls animationDuration={1000} mouseTracking animationType='fadeout' autoPlay autoPlayInterval={'3000'}>
          <p><img className='sliderimg h-auto w-[100%]' src={img1} alt="product" /></p>
          <p><img className='sliderimg h-auto w-[100%]' src={img2} alt="product" /></p>
        </AliceCarousel>
      </div>
      <div className="first-section max-md:hidden w-[100%]">
        <AliceCarousel infinite autoPlayStrategy='all' disableDotsControls disableButtonsControls animationDuration={1000} mouseTracking animationType='fadeout' autoPlay autoPlayInterval={'3000'}>
          <p><img className='sliderimg h-auto w-[100%]' src={img11} alt="product" /></p>
          <p><img className='sliderimg h-auto w-[100%]' src={img12} alt="product" /></p>
        </AliceCarousel>
      </div>

      <div className="second-section w-[100%] pt-[10px]">
        <AliceCarousel responsive={responsive} disableDotsControls autoPlayStrategy='all' infinite disableButtonsControls animationDuration={1000} mouseTracking autoPlay autoPlayInterval={'2000'}>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img3} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img6} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img7} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img8} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img9} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img10} alt="product" /></p>
        </AliceCarousel>
      </div>
    </>);
}

export default Home;