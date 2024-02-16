import React from 'react'
import Logo from '../assets/Zoom.png'
 

const Navbar = () => {
    return (

        <div className="navbar bg-black text-white h-[80px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]   shadow   w-[400px] bg-black text-white text-2xl h-[500px]  ">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                
                <div>
                <img src={Logo} alt="Logo" className='w-[100px]' />
                </div>
            </div>
           
           
            <div className="navbar-center hidden lg:flex ml-[650px]">
    <ul className="menu menu-horizontal px-1">
      
      <li>
        <details>
          <summary className='font-bold text-lg'>Company Profile</summary>
          <ul className="p-8 bg-black text-white text-lg font-bold w-[250px]">
            <li><a>Investor Relations</a></li>
            <li><a>Press Releases</a></li>
            <li><a>Leader Ship</a></li>
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
            <div className="navbar-end mx-4">
                <div className='mr-4 font-bold'>
                 Anil Geela
                </div>
                <button className="btn btn-ghost btn-circle">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </button>
            </div>
        </div>


    )
}

export default Navbar