import * as Icon from 'react-bootstrap-icons';
import './bStyle.css';
import { NavLink } from 'react-router-dom';

const Bottom = () => {
  return (
    <>
      <div className="row bg-white md:hidden bottom w-100">
        <div className="col-3">
          <NavLink id='link' to='/cart'>
            <div className="row">
              <Icon.Cart size={32} />
            </div>
            <div className="row">
              <p>سبد خرید</p>
            </div>
          </NavLink >
        </div>
        <div className="col-3">
          <NavLink id='link' to='/account'>

            <div className="row">
              <Icon.Person size={32} />
            </div>
            <div className="row">
              <p>حساب کاربری</p>
            </div>
          </NavLink >
        </div>
        <div className="col-3">
          <NavLink id='link' to='/products'>

            <div className="row">
              <Icon.ColumnsGap size={32} />
            </div>
            <div className="row">

              <p>محصولات</p>
            </div>
          </NavLink >
        </div>
        <div className="col-3">
          <NavLink id='link' to='/'>

            <div className="row">
              <Icon.HouseDoor size={32} />
            </div>
            <div className="row">
              <p>خانه</p>
            </div>
          </NavLink >
        </div>
      </div>
    </>
  );
}

export default Bottom;