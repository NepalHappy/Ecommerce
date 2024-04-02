import { NavLink } from 'react-router-dom'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

import NavLinks from './NavLinks'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/user/userSlice'

const NavBar = () => {
  const dispatch = useDispatch()
  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  const { numItemsInCart } = useSelector((store) => store.cartState)

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink className="hidden lg:flex btn btn-primary text-3xl  items-center">
            C
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars className="w-6 h-6" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 "
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME ICONS */}
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme} />
            <BsSunFill className="swap-on fill-current w-4 h-4" />
            <BsMoonFill className="swap-off fill-current w-4 h-4" />
          </label>
          {/* CART LINK*/}
          <NavLink to="cart" className="ml-4 btn btn-ghost btn-circle btn-md">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="indicator-item badge badge-sm badge-primary">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
