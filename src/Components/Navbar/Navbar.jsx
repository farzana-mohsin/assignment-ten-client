import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCrown } from "react-icons/fa";

// import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li className='text-white'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='text-white'>
        <NavLink to='/all'>All Arts & Crafts</NavLink>
      </li>
      {user && (
        <>
          <li className='text-white'>
            <NavLink to='/add-craft'>Add Craft Item</NavLink>
          </li>
          <li className='text-white'>
            <NavLink to='/special-deals'>My Arts & Crafts</NavLink>
          </li>
          {/* <li>
            <NavLink to='/user-profile'>User Profile</NavLink>
          </li> */}
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className='navbar bg-black my-4 mx-auto '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-black rounded-box w-52 text-black'
            >
              {navLinks}
            </ul>
          </div>
          <h1 className='animate__animated animate__fadeInLeft text-2xl md:text-3xl font-bold text-white pl-1'>
            Crown
          </h1>
          <div className='flex items-center justify-center text-4xl font-bold text-orange-400 ml-2'>
            <FaCrown />
          </div>
          <h1 className='animate__animated animate__fadeInLeft text-2xl md:text-3xl font-bold text-white pl-1'>
            Art
          </h1>
        </div>
        <div className='navbar-end hidden lg:flex'>
          <ul className='flex flex-row px-1 space-x-5'>{navLinks}</ul>
        </div>
        <div className=' flex flex-col md:flex-row '>
          {/* <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          ></div> */}

          {user ? (
            <div className='flex md:flex-row items-center gap-2'>
              {/* {user?.displayName || user?.uid.slice(0, 8) || "user not found"}
              <img
                className='w-10 rounded-full hidden md:block'
                alt='image not found'
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/YDgsXWt/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg"
                }
              /> */}
              <div
                className='tooltip tooltip-bottom tooltip-accent rounded-full bg-transparent border-none text-white'
                data-tip={user?.displayName || "user not found"}
              >
                <button className='btn rounded-full bg-transparent border-none'>
                  <img
                    className='w-10 md:block rounded-full bg-transparent border-none'
                    alt='image not found'
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/YDgsXWt/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg"
                    }
                  />
                </button>
              </div>

              <button
                onClick={() => handleSignOut()}
                className=' bg-orange-400 text-white px-4 py-2 border text-sm rounded-xl ml-2'
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link to='/login'>
                <button className='btn'>Login</button>
              </Link>
              <Link to='/register'>
                <button className='btn'>Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
