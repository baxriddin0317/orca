import React from 'react'
import { Link } from 'react-router-dom'

function Header() {  
   return (
    <header className="py-4 md:py-5 px-4 md:px-7 lg:px-9 mb-5" >
    
        <div className='max-w-[1240px] mx-auto flex justify-between items-center'>
            {/* logo */}
            <Link to="/" >
                <h2>S-orca</h2>
            </Link>

            {/* nav */}
            <nav className='hidden md:block'>
                <ul className='flex'>
                    <li className='menu__item'> 
                        <Link to="/" className='text-lg' >Home</Link> 
                    </li>
                    <li className='menu__item'> 
                        <Link to="/news" className='text-lg' >News</Link> 
                    </li>
                    <li className='menu__item'> 
                        <Link to="/profil" className='text-lg' >Profil</Link> 
                    </li>
                    <li className='menu__item'> 
                        <Link to="/login" className='text-lg' >Login</Link> 
                    </li>
                </ul>
            </nav>

        </div>

    </header>
  )
}

export default Header