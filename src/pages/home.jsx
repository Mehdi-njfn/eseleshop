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
import offer1 from '../asset/offer-product/0a6d3e8cb7d59e1ffaba876ac0be03f5.webp';
import offer2 from '../asset/offer-product/17d60cfc01170236c6601d65b6f95438.webp';
import offer3 from '../asset/offer-product/4026d5dea979bf64ebd881524681ec80.webp';
import offer4 from '../asset/offer-product/434dc1f5c86c07f4346a000bb033b64e.webp';
import offer5 from '../asset/offer-product/4602abe1ba56f7d04c13517503295ee0.webp';
import offer6 from '../asset/offer-product/4738aac02f020f3f5af323c65624184a.webp';
import offer7 from '../asset/offer-product/5bc26fbc4bb04b8ce3f58c0cf71c9113.webp';
import offer8 from '../asset/offer-product/6140607a0209b7f666b30ac90d07d418.webp';
import offer9 from '../asset/offer-product/67035f78105ecfb8c0ccaeba03cc0787.webp';
import offer10 from '../asset/offer-product/7a90403c85768b2ef113d9158f1dc35f.webp';
import offer11 from '../asset/offer-product/94bc9aece1d0c25d9d0be7b7991d8293.webp';
import offer12 from '../asset/offer-product/b55fcdcd1c0b8f4d013b8ca6723960f2.webp';
import offer13 from '../asset/offer-product/c5932dc7286b0071e4cc2419fe27084f.webp';
import offer14 from '../asset/offer-product/cb78a7e470bcf1d531c49bc26deafbd2.webp';
import offer15 from '../asset/offer-product/f83d76e800bf587814f3cd3ec6927b12.webp';

import imglast1 from '../asset/9ded72beb54cf8bf1df88cc316247ac3.webp';
import imglast2 from '../asset/54a95a83e58ad836e07508272b78b7dc.webp';

import aboutImg from '../asset/about-image.99421e1f.webp';
import aboutTitleImg from '../asset/about-title.3e4d0aca.webp';

import './home.css';
import Card from '../component/card';

const responsive = {
  0: { items: 3 },
  568: { items: 3 },
  768: { items: 4 },
};
const responsiveoffer = {
  0: { items: 3 },
  568: { items: 3 },
  768: { items: 4 },
};
const offer = [
  {
    id: 1,
    title: 'Cream VHA',
    price: 120.000,
    price2: 140.000,
    src: offer1
  },
  {
    id: 2,
    title: 'Cream VHA',
    price: 120.000,
    price2: 140.000,
    src: offer2
  },
  {
    id: 3,
    title: 'Cream VHA',
    price: 120.000,
    price2: 140.000,
    src: offer3
  },
]
const list = []

const Home = () => {

  return (
    <>
      <div className="first-section relative md:hidden w-[100%]">
        <AliceCarousel infinite autoPlayStrategy='all' disableDotsControls disableButtonsControls animationDuration={1000} mouseTracking animationType='fadeout' autoPlay autoPlayInterval={'3000'}>
          <p><img className='sliderimg h-auto w-[100%]' src={img1} alt="product" /></p>
          <p><img className='sliderimg h-auto w-[100%]' src={img2} alt="product" /></p>
        </AliceCarousel>
      </div>
      <div className="first-section relative max-md:hidden w-screen" >
        <AliceCarousel infinite autoPlayStrategy='all' disableDotsControls disableButtonsControls animationDuration={1000} mouseTracking animationType='fadeout' autoPlay autoPlayInterval={'3000'}>
          <img className='sliderimg h-auto w-screen' src={img11} alt="product" />
          <img className='sliderimg h-auto w-screen' src={img12} alt="product" />
        </AliceCarousel>
      </div>

      <div className="second-section relative w-[100%] pt-[10px]">
        <AliceCarousel responsive={responsive} disableDotsControls autoPlayStrategy='all' infinite disableButtonsControls animationDuration={1000} mouseTracking autoPlay autoPlayInterval={'2000'}>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img3} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img6} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img7} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img8} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img9} alt="product" /></p>
          <p><img className='sliderimg pic  h-auto max-md:h-auto ' src={img10} alt="product" /></p>
        </AliceCarousel>
      </div>
      <div className="offer-section relative flex items-center bg-[#ff5392d7] md:rounded-[10px] mt-[50px] pt-0 h-[450px] min-[550px]:h-[500px] min-[630px]:h-[550px] md:h-[410px] md:w-[90%]  w-[100%]">
        <div className=" w-[50%] h-auto">
          <div className=" absolute z-0 mx-auto p-0 bg top-[-90px] w-[100%] h-[100%] md:bg-right md:h-[600px] md:left-[3.5rem] flex justify-center ">
            <div className='md:hidden absolute z-[1] bbg mx-auto top-[80px]  flex items-center justify-center'>
              <a href="/offer" className=' absolute z-[2] mt-[54%] no-underline font-bold text-[#a0826d] text-xl sm:text-[2rem]'>See more</a>
            </div>
          </div>
          <div className=" max-md:hidden z-[1] absolute bbbg w-[260px] top-0 right-[10px] h-[100%]">
            <a href="/offer" className=' absolute z-[2] bottom-[80px] right-[75px] no-underline font-bold text-[#a0826d] text-xl sm:text-[2rem]'>See more</a>
          </div>
        </div>
        <div id='element' className=" absolute bottom-[3%] md:w-[100%] md:top-[40px] md:left-[20px] md:z-[1]">
          <div className="grid w-fit overflow-x-hidden md:mr-[290px]">
            <AliceCarousel responsive={responsiveoffer} autoWidth autoPlayDirection='rtl' disableDotsControls autoPlayStrategy='all' infinite disableButtonsControls animationDuration={1000} mouseTracking autoPlay autoPlayInterval={'2000'}>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px] mr-12 ">
                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer1} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">
                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer2} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer3} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer4} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer5} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer6} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer7} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer8} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer9} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer10} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer11} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer12} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer13} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer14} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer15} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>

            </AliceCarousel>
          </div>
        </div>
      </div >
      <div class=" relative md:h-[600px] container xl:w-[90%] mt-[90px] md:pb-[80px] md:grid md:grid-rows-2 md:grid-flow-col md:gap-4">
        <div class=" md:row-span-2  bg-none">
          <img src={aboutImg} className=' relative right-[4%] md:w-[350px] lg:w-[400px] xl:w-[600px] w-[250px] h-auto' alt="" />
        </div>
        <div class="row-span-1 col-span-2 bg-none">
          <img src={aboutTitleImg} className=' relative md:left-[20%] w-[250px] xl:w-[400px] h-auto' alt="" />
        </div>
        <div class=" xl:mt-[100px] mb-5 h-auto col-span-2 bg-none">
          <p className='about relative md:top-[-50px] lg:top-0 mx-[10px] mb-[4rem] mt-4 text-[#6d6d6ddd] font-medium text-[1rem] text-justify '>اِسل یک فروشگاه آنلاین است که در زمینه فروش انواع لوازم آرایشی فعالیت می‌کند. ما به عنوان یک فروشنده معتبر، بهترین برندها و محصولات با کیفیت را به مشتریان ارائه می‌دهیم. در اِسل، متعهد هستیم که بهترین تجربه خرید را برای مشتریانمان فراهم کنیم. مجموعه‌ای از بهترین برندهای لوازم آرایشی را در سایت اِسل پیدا خواهید کرد. ما با توجه به استانداردهای بالا در انتخاب محصولات، همیشه از برندهای معتبر و مشهور در صنعت آرایش استفاده می‌کنیم.</p>
          <a href='/aboutUs' className=' relative md:bottom-[80px] lg:bottom-0 border-none px-[2rem] py-[.8rem] rounded-[6px] no-underline font-semibold text-white bg-[#ff5392d7]'>درباره ما</a>
        </div>
      </div>
      <div className="offer-section relative flex items-center bg-[#8845f4d7] md:rounded-[10px] mt-[20px] pt-0 h-[450px] min-[550px]:h-[500px] min-[630px]:h-[550px] md:h-[410px] md:w-[90%]  w-[100%]">
        <div className=" w-[50%] h-auto">
          <div className=" absolute z-0 mx-auto p-0 bg2 top-[-90px] w-[100%] h-[100%] md:bg-right md:h-[600px] md:left-[3.5rem] flex justify-center ">
            <div className='md:hidden absolute z-[1] bbg mx-auto top-[80px]  flex items-center justify-center'>
              <a href="/offer" className=' absolute z-[2] mt-[54%] no-underline font-bold text-[#a0826d] text-xl sm:text-[2rem]'>See more</a>
            </div>
          </div>
          <div className=" max-md:hidden z-[1] absolute bbbg2 w-[260px] top-0 right-[10px] h-[100%]">
            <a href="/offer" className=' absolute z-[2] bottom-[80px] right-[55px] no-underline font-bold text-[#a0826d] text-xl sm:text-[2rem]'>See more</a>
          </div>
        </div>
        <div id='element' className=" absolute bottom-[3%] md:w-[100%] md:top-[40px] md:left-[20px] md:z-[1]">
          <div className="grid w-fit overflow-x-hidden md:mr-[290px]">
            <AliceCarousel responsive={responsiveoffer} autoWidth autoPlayDirection='rtl' disableDotsControls autoPlayStrategy='all' infinite disableButtonsControls animationDuration={1000} mouseTracking autoPlay autoPlayInterval={'2000'}>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px] mr-12 ">
                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer1} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">
                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer2} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer3} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer4} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer5} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer6} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer7} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer8} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer9} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer10} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer11} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer12} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer13} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer14} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>
              <div className="card z-0 flex content-center h-[220px] w-[170px] md:h-[330px] md:w-[230px]">

                <div className=" off absolute z-10 bg-red-700 m-[5px] w-fit text-white p-[2px] rounded-[4px]">10%</div>
                <img className='offimg mt-[20px] z-1 w-[120px] h-auto mx-auto' src={offer15} alt="" />
                <div className=" h-[100%] flex items-end justify-center">
                  <div className=" grid mb-[10px]">
                    <span className=' z-1 justify-end content-end font-bold'>Cream VHA</span>
                    <span className='justify-end content-end'>120.000$</span>
                    <span className='z-1 line-through flex justify-center  decoration-red-600 text-[#a4a4a4dd]'>140.000$</span>
                  </div>

                </div>
              </div>

            </AliceCarousel>
          </div>
        </div>
      </div >
      <div className=" relative md:flex mt-6 md:mx-[3.7%] lg:mx-[4.5%]">
        <div className="my-[10px] px-[10px] mt-[10px] md:w-[50%] overflow-hidden rounded-xl">
          <img className='zoom relative  h-auto w-full rounded-xl' src={imglast1} alt="" />
        </div>
        <div className="my-[10px] px-[10px] md:w-[50%] overflow-hidden rounded-xl">
          <img className='zoom relative  h-auto w-full rounded-xl' src={imglast2} alt="" />
        </div>
      </div>
      <div className="reading relative w-[100%] ">
        <div className=" relative w-[100%]"></div>
      </div>

    </>);
}

export default Home;