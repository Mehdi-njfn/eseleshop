
import * as Icon from 'react-bootstrap-icons';

import zar from '../asset/download.png';
import enamad from '../asset/enamad-logo.ac482e80.jpeg';



const Footer = () => {
  return (
    <div className="footer flex flex-col bg-[#ff2c848b] w-[100%] pt-[30px]">
      <div className="discript relative w-[100%] ">
        <div className=" text-right w-[360px] mx-auto ">
          <p className=" font-bold text-[1.4rem]">درباره فروشگاه</p>
          <p dir="rtl" className=" font-medium text-[1rem] leading-[2rem] text-justify">اِسل یک فروشگاه آنلاین است که در زمینه فروش انواع لوازم آرایشی فعالیت می‌کند. ما به عنوان یک فروشنده معتبر، بهترین برندها و محصولات با کیفیت را به مشتریان ارائه می‌دهیم. در اِسل، متعهد هستیم که بهترین تجربه خرید را برای مشتریانمان فراهم کنیم. مجموعه‌ای از بهترین برندهای لوازم آرایشی را در سایت اِسل پیدا خواهید کرد. ما با توجه به استانداردهای بالا در انتخاب محصولات، همیشه از برندهای معتبر و مشهور در صنعت آرایش استفاده می‌کنیم.</p>
          <p className='flex text-[#edebebdd] mt-8'>
            <Icon.Telegram className='ml-auto mr-2' size={48} />
            <Icon.Instagram className='mr-auto' size={48} />
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="products relative w-[150px] float-right mt-8">
          <div className="text-right pr-[20px]">
            <p className=" font-bold text-[1.4rem] mb-7">محصولات</p>
            <ul className=' list-none w-[100%] font-normal'>
              <li className='my-[15px]'>لوازم آرایشی</li>
              <li className='my-[15px]'>لوازم بهداشتی</li>
              <li className='my-[15px]'>لوازم پوست</li>
              <li className='my-[15px]'>لوازم مو</li>
              <li className='my-[15px]'>لوازم برقی</li>
            </ul>
          </div>
        </div>
        <div className="contact relative w-[150px] float-right mt-8">
          <div className="text-right pr-[20px]">
            <p className='font-bold text-[1.4rem] mb-7'>تماس با ما</p>
            <p className='font-bold text-[1.4rem] mb-7'>:تلفن</p>
            <p>09180091822</p>
            <p>021-12 1822</p>
          </div>
        </div>

      </div>
      <div className="medals relative mx-auto mt-8 ">
        <p className='font-bold text-[1.4rem] mb-7'>با اعتماد خرید کنید</p>
        <img className='h-auto w-[80px] mr-2 rounded-lg' src={zar} alt="" />
        <img className='h-auto w-[105px] ml-2' src={enamad} alt="" />
      </div>

    </div>
  );
}

export default Footer;