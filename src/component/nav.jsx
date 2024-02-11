import * as Icon from 'react-bootstrap-icons';
import { Link, NavLink } from 'react-router-dom';
import logo from '../asset/logo1.11c7f5e0.webp'
import './style.css'

const Nav = () => {
  return (
    <>
      <div className=" nav-top
    ">
        <div className="      
        sticky w-100 border-black0 mx-0 mt-0 bg-white
        md:hidden
      ">
          <div className="
      w-90 mx-auto flex
      ">
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
          <div className="
            w-90 flex mt-auto justify-end
            ">
            <input className='w-[80%] h-12 rounded-xl  mr-auto ml-[15px] my-1' type="text" placeholder='search product ...' />
            <button className='w-[41px] h-[41px] mt-[4px] mx-[15px]  text-center items-center rounded-lg bg-red-300 bg-opacity-80 border-none text-3xl font-extrabold flex content-center'><Icon.List className='text-white ' size={32} /></button>
          </div>
        </div>

        <div className="max-md:hidden bg-red-200 w-100 h-50">
          h
        </div>

      </div>
    </>);
}

export default Nav;