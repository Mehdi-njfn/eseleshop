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
            <input className='w-[80%] h-12 rounded-xl  mr-auto ml-[.93rem] my-1' type="text" placeholder='search product ...' />
            <button className='w-[2.56rem] h-[2.56rem] mt-[.25rem] mx-[.93rem]  text-center items-center rounded-lg bg-red-300 bg-opacity-80 border-none text-3xl font-extrabold flex content-center'><Icon.List className='text-white mx-auto' size={32} /></button>
          </div>
        </div>

        <div className="dark:bg-slate-800 bg-white max-md:hidden w-[100%] h-auto ">
          <div className=" sticky md:flex md:items-center">
            <div className=" md:w-[20%] md:grid md:grid-cols-2 md:ml-[1.25rem] lg:ml-[6.25rem] md:h-[5.12rem] md:justify-start md:items-center">
              <div className="md:w-[6.25rem] row-start-1 row-end-4">
                <label className='md:mr-[.62rem] md:text-[#000000b1] text-sm md:font-bold'>Price: 5000$</label>
                <label className='md:mr-[.62rem] md:text-red-300 text-sm md:font-bold'>Number: 1</label>
              </div>
              <div className='md:w-[12.5rem] row-start-1 row-end-4'>
                <NavLink className='ml-0 md:text-white md:mr-4 ' to="/cart">
                  <Icon.Cart className='md:h-auto md:w-[2.5rem] md:p-[.31rem] md:bg-red-300 md:shadow-lg md:shadow-red-200 md:rounded-[.5rem]' />
                </NavLink>
                <NavLink className='md:text-[#000000b1]  ' to="/account"><Icon.Person className=' md:bg-gray-100 md:h-auto md:w-[2.5rem] md:p-[.31rem] md:shadow-lg md:shadow-gray-300 md:rounded-[.5rem]' /></NavLink>
                <button id='darkmode' onClick={darkModebtn} className=' rounded-lg border-none p-[.43rem] bg-[#03356b] text-[#cbcbcb] shadow-md shadow-[#03356b]'><Icon.Moon size={24} /> </button>
              </div>
            </div>
            <div className="md:w-[80%] md:ml-[3.12rem]  md:mr-[1.25rem] lg:mr-[6.25rem] md:flex md:items-center md:content-end">
              <input className='md:h-12 md:w-[50%] lg:w-[50%] md:rounded-xl  md:ml-auto md:mr-[1.25rem]  ' type="text" placeholder='search product ...' />
              <NavLink to='/'>
                <img className='md:h-auto md:w-44 md:my-[.31rem]' src={logo} alt="logo" />
              </NavLink>

            </div>
          </div>
          <div className="h-[2.5rem] pt-[.62rem] dark:bg-slate-800 bg-white flex items-center md:mx-[2.81rem] lg:mx-[6.87rem] ">
            <div className="2xl:w-[50%] xl:w-[40%] md:w-[30%]  flex float-start">
              <a className='text-red-300 flex-initial mr-4' href="/"><Icon.Instagram className='h-auto w-8 ' /></a>
              <a className='text-red-300 flex-initial ' href="/"><Icon.Telegram className='h-auto w-8' /></a>

            </div>
            <div className="2xl:w-[50%] xl:w-[60%] md:w-[70%] flex float-start">
              <ul className='mt-[.31rem] list-none text-lg flex flex-row'>
                <li className='mx-[.62rem] mt-[.31rem] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>Home</NavLink>
                </li>
                <li className='mx-[.62rem] mt-[.31rem] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>Gallery</NavLink>
                </li>
                <li className='mx-[.62rem] mt-[.31rem] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>Blog</NavLink>
                </li>
                <li className='mx-[.62rem] mt-[.31rem] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>Contact Us</NavLink>
                </li>
                <li className='mx-[.62rem] mt-[.31rem] '>
                  <NavLink to='/' className=' no-underline dark:text-white font-medium xl:text-2xl lg:text-lg md:text-base nav_itemsh transition-all'>About Us</NavLink>
                </li>
                <li className='h-[2.5rem] bg-red-300  text-white lg:text-2xl pb-[.31rem]'>
                  <label className='lg:mx-[.93rem] lg:ml-[2.5rem] md:mx-[.43rem] mt-[.25x]'>Products</label>
                  <Icon.List className='h-auto lg:w-[1rem] mr-[.93rem] mb-[.12rem]' />
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </>);
}

export default Nav;