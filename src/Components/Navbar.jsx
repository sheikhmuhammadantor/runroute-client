import logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../App';

function Navbar() {

  const { user, signOutUser } = useAuth()

  const handelSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('Sign Out Successfully')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  return (
    <div className="navbar bg-base-100 max-w-[1535px] mx-auto px-6">
      <div className="flex-1">
        <Link to="/">
          <img className='max-h-20 border' src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <li><NavLink to="/">Home</NavLink></li> */}
          <li><NavLink to="/marathons" className="text-lg font-medium underline">Marathons</NavLink></li>
          {
            user ? <li><NavLink to="/dashboard/addMarathon" className="text-lg font-medium underline">Dashboard</NavLink></li> : ''
          }
        </ul>
        <div>
          {
            user ?
              <div className="relative group">
                <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
                  <img className="max-w-full max-h-full" src={user?.photoURL} alt="" />
                </label>
                <div className="absolute top-12 right-0 bg-white shadow-lg border rounded w-60 p-2 hidden group-hover:block z-20">
                  <ul>
                    <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer font-semibold">{user?.displayName}</li>
                    <br />
                    <Link onClick={handelSignOut} className="btn text-lg w-full">Log Out</Link>
                  </ul>
                </div>
              </div> :
              <>
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn ml-3">Register</Link>
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
