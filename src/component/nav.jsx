import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import logo from '../asset/logo1.11c7f5e0.webp'
import './style.css'

const Nav = () => {
  return ( 
  <>
    <div className="navbar navbar-expand-lg w-100" >
      <div className="row container headernav h-50">
        <div className="col-6 ">
          <a href='www.instagram/' className='nav-icon ' id='icnonav'>
            <Icon.Instagram id='icnonav'  size={24} />
          </a>
          <a href='www.telegram/' className='nav-icon' id='icnonav'>
            <Icon.Telegram  id='icnonav' size={24} />
          </a>
        </div>
        <div className="col-6">
          <a href='/'>
            <img className='logo' src={logo} alt="" />
          </a>
        </div>
          
      </div>
    

      <div className="row h-50 d-flex w-100">
        <div className="w-75 col-lg-10">
            <input className=' m-4 w-75' type="text" placeholder='search...' />
        </div>
        <div className="w-lg-100">
          
        </div>
      </div>
      
    </div>
    
  </> );
}
 
export default Nav;