import * as Icon from 'react-bootstrap-icons';
import { Link, NavLink } from 'react-router-dom';
import logo from '../asset/logo1.11c7f5e0.webp'
import './style.css'

const Nav = () => {
  const darkModebtn = () => {
    let html = document.getElementById('html');
    let flag = false;
    console.log('ok');
    if (flag === false) {
      html.setAttribute('class', "dark");
      flag = true;
      console.log(flag);
    }
    else {
      html.setAttribute('class', "");
      flag = false;
      console.log(flag);
    }
  }

  return (
    <>
      <div className=" nav-top">
        <div className="sticky w-100 border-black0 mx-0 mt-0 dark:bg-slate-800 bg-white md:hidden">
          <div className="w-90 mx-auto flex">
            <div className="w-1/3 flex-initial mt-3">
              <a className='text-red-300 flex-initial mr-4' href="/"><Icon.Instagram className='h-auto w-7 ' /></a>
              <a className='text-red-300 flex-initial ' href="/"><Icon.Telegram className='h-auto w-7' /></a>
            </div>
            <div className="w-1/3"></div>
            <div className="w-1/3 flex-initial">
              <NavLink to='/'>
                <img className='h-auto w-28 mt-1' src={logo} alt="logo" />
              </NavLink>
            </div>

          </div>
          <div className="w-90 flex mt-auto justify-end">
            <input className='w-[80%] h-12 rounded-xl  mr-auto ml-[15px] my-1' type="text" placeholder='search product ...' />
            <button className='w-[41px] h-[41px] mt-[4px] mx-[15px]  text-center items-center rounded-lg bg-red-300 bg-opacity-80 border-none text-3xl font-extrabold flex content-center'><Icon.List className='text-white mx-auto' size={32} /></button>
          </div>
        </div>

        <div className="dark:bg-slate-800 bg-white max-md:hidden w-[100%] h-auto ">
          <div className=" sticky md:flex md:items-center">
            <div className=" md:w-[20%] md:grid md:grid-cols-2 md:ml-[20px] lg:ml-[100px] md:h-[82px] md:justify-start md:items-center">
              <div className="md:w-[100px] row-start-1 row-end-4">
                <label className='md:mr-[10px] md:text-[#000000b1] text-sm md:font-bold'>Price: 5000$</label>
                <label className='md:mr-[10px] md:text-red-300 text-sm md:font-bold'>Number: 1</label>
              </div>
              <div className='md:w-[200px] row-start-1 row-end-4'>
                <NavLink className='ml-0 md:text-white md:mr-4 ' to="/cart">
                  <Icon.Cart className='md:h-auto md:w-[40px] md:p-[5px] md:bg-red-300 md:shadow-lg md:shadow-red-200 md:rounded-[8px]' />
                </NavLink>
                <NavLink className='md:text-[#000000b1]  ' to="/account"><Icon.Person className=' md:bg-gray-100 md:h-auto md:w-[40px] md:p-[5px] md:shadow-lg md:shadow-gray-300 md:rounded-[8px]' /></NavLink>
                <button id='darkmode' onClick={darkModebtn} className=' rounded-lg border-none p-[7px] bg-[#03356b] text-[#cbcbcb] shadow-md shadow-[#03356b]'><Icon.Moon size={24} /> </button>
              </div>
            </div>
            <div className="md:w-[80%] md:ml-[50px]  md:mr-[20px] lg:mr-[100px] md:flex md:items-center md:content-end">
              <input className='md:h-12 md:w-[50%] lg:w-[50%] md:rounded-xl  md:ml-auto md:mr-[20px]  ' type="text" placeholder='search product ...' />
              <NavLink to='/'>
                <img className='md:h-auto md:w-44 md:my-[5px]' src={logo} alt="logo" />
              </NavLink>

            </div>
          </div>
          <div className="h-[40px] pt-[10px] dark:bg-slate-800 bg-white flex items-center md:mx-[45px] lg:mx-[110px] ">
            <div className="2xl:w-[50%] xl:w-[40%] md:w-[30%]  flex float-start">
              <a className='text-red-300 flex-initial mr-4' href="/"><Icon.Instagram className='h-auto w-8 ' /></a>
              <a className='text-red-300 flex-initial ' href="/"><Icon.Telegram className='h-auto w-8' /></a>

            </div>
            <div className="2xl:w-[50%] xl:w-[60%] md:w-[70%] flex float-start">
              <ul className='mt-[5px] list-none text-lg flex flex-row'>
                <li className='mx-[10px] mt-[5px] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>Home</NavLink>
                </li>
                <li className='mx-[10px] mt-[5px] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>Gallery</NavLink>
                </li>
                <li className='mx-[10px] mt-[5px] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>Blog</NavLink>
                </li>
                <li className='mx-[10px] mt-[5px] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>Contact Us</NavLink>
                </li>
                <li className='mx-[10px] mt-[5px] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>About Us</NavLink>
                </li>
                <li className='h-[40px] bg-red-300  text-white lg:text-2xl pb-[5px]'>
                  <label className='lg:mx-[15px] lg:ml-[20px] md:mx-[7px] mt-[4px]'>Products</label>
                  <Icon.List className='h-auto lg:w-[16px] mr-[15px] mb-[2px]' />
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </>);
}

export default Nav;