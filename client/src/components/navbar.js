import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }


  return (
    <>
      <div></div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://cdn.tailwindcss.com"></script>

      




      <div className="bg-[#ABF4AA]">


        <div className="bg-[#03755c] p-6 flex justify-between items-center">

          <div className="flex items-center">
            <Link to="/">
              <img className="w-1/5 ml-64" src="https://mir-s3-cdn-cf.behance.net/projects/404/2c1f32117496869.Y3JvcCw1MTIsNDAxLDYwMiwyMDQ.jpg" width="50" alt="Logo"></img>
            </Link>

          </div>

          <div className='flex items-center mx-40'>

            <img className=" ml-6 mt-1 object-scale-down h-7 w-7" src="https://cdn2.iconfinder.com/data/icons/essential-web-1-1/50/heart-love-like-favorite-prefered-256.png" alt="RealID"></img>
            <a href="/" className=" inline-block p-2 text-white no-underline hover:underline font-bold text-xs">Who we are</a>

            <img className=" ml-6 mt-1 object-scale-down h-7 w-7" src="https://cdn2.iconfinder.com/data/icons/essential-web-3/50/globe-notification-earth-language-global-256.png" alt="OnlineServices"></img>
            <a href="/" className=" inline-block p-2 text-white no-underline hover:underline font-bold text-xs">Scopes</a>

            <img className=" ml-6 mt-1 object-scale-down h-7 w-7" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/globe-256.png" alt="Translate"></img>
            <a href="/" className=" inline-block p-2 text-white no-underline hover:underline font-bold text-xs">How to donate</a>

            <img className=" ml-6 mt-1 object-scale-down h-7 w-7" src="https://cdn2.iconfinder.com/data/icons/android-16/32/Video_essential_Android_ui_web-256.png" alt="MyDMV"></img>
            <a href="/" className=" inline-block p-2 text-white no-underline hover:underline font-bold text-xs">Media</a>



            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 ml-11 rounded-lg text-sm focus:outline-none"
              type="search" name="search" placeholder="Search"></input>

          </div>

        </div>
        <div className=" bg-white py-5 px-64 flex justify-between items-center drop-shadow-xl rounded-2xl">

          <div className="relative group">
            <button className="items-center w-full px-8 py-4 mt-2 text-base font-bold text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
              <Link to="/Login" className="text-black link link-underline link-underline-black ml-[50px]"> {user && (


                <button onClick={handleClick}>{user.email} (Log out)</button>

              )} {!user && (

                <Link to="/login">Login</Link>


              )}</Link>
            </button>
            <div className="absolute z-10 hidden bg-grey-200 group-hover:block"></div>

          </div>



          {!user && ( <Link to="/Register" className="font-display max-w-sm text-base font-bold leading-tight">
            <span className="link link-underline link-underline-black text-black ">Signup</span>
          </Link>)}



          <Link to="/Blogs" className="font-display max-w-sm text-base font-bold leading-tight mr-[50px]">
            <span className="link link-underline link-underline-black text-black "> Blog </span>
          </Link>


          <Link to="/Donate" className="font-display max-w-sm text-base font-bold leading-tight pr-[190px]">
            <span className="link link-underline link-underline-black text-black "> Donate</span>
          </Link>



        </div>

      </div></>

  )
}

export default Navbar