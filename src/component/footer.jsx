
import * as Icon from 'react-bootstrap-icons';




const Footer = () => {
  return (
    <div className="footer bg-[#ff2c84db] w-[100%] pt-[30px]">
      <div className="discript w-[100%] ">
        <div className=" text-right w-[360px] mx-auto ">
          <p className=" font-bold text-[1.4rem]">درباره فروشگاه</p>
          <p dir="rtl" className=" font-medium text-[1rem] leading-[2rem] text-justify">اِسل یک فروشگاه آنلاین است که در زمینه فروش انواع لوازم آرایشی فعالیت می‌کند. ما به عنوان یک فروشنده معتبر، بهترین برندها و محصولات با کیفیت را به مشتریان ارائه می‌دهیم. در اِسل، متعهد هستیم که بهترین تجربه خرید را برای مشتریانمان فراهم کنیم. مجموعه‌ای از بهترین برندهای لوازم آرایشی را در سایت اِسل پیدا خواهید کرد. ما با توجه به استانداردهای بالا در انتخاب محصولات، همیشه از برندهای معتبر و مشهور در صنعت آرایش استفاده می‌کنیم.</p>
          <p className='flex text-[#e0e0e0dd]'>
            <Icon.Telegram className='ml-auto mr-2' size={48} />
            <Icon.Instagram className='mr-auto' size={48} />
          </p>
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>

    </div>
  );
}

export default Footer;