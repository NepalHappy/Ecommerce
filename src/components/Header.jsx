import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/user/userSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useQueryClient } from '@tanstack/react-query'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.userState.user)
  const queryClient = useQueryClient()
  const handleLogout = () => {
    navigate('/')
    dispatch(logoutUser())
    dispatch(clearCart())
    queryClient.removeQueries()
  }
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className=" align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-xs"> Hello , {user.username}</p>
            <button
              type="button"
              className="btn btn-primary btn-outline btn-xs"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex  gap-x-6 justify-center items-center ">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign In / Guest User
            </Link>
            <Link to="register" className="link link-hover text-xs sm:text-sm">
              Register
            </Link>
          </div>
        )}

        {/* USER */}
        {/* LINKS */}
      </div>
    </header>
  )
}
export default Header
