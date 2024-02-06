import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
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
              <a href="/">
                <img className='h-auto w-28 mt-1' src={logo} alt="" />
              </a>
            </div>

          </div>
          <div className="
        w-90 flex mt-auto
        ">
            <input className='w-80 h-12 rounded-xl mx-3 my-1' type="text" placeholder='search product ...' />
          </div>
        </div>

        <div className="max-md:hidden bg-red-200 w-100 h-50">
          hi
        </div>

      </div>
    </>);
}

export default Nav;