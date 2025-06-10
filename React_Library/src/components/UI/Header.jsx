import { useState } from 'react'
import './header.css'
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";



export const Headers = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    const handleToggleButton = () => {
        setShowMenu(!showMenu);
    }
    

    return <header>
        <div className="container">
            <div className="navbar">
                <div className="Logo"><NavLink to="/">
                    <img src="/photo.webp" alt="" style={{ height: "100px", width: "100px", borderRadius: "50%" }} />
                </NavLink></div>
                <nav className={showMenu ? "mob-menu" : "web-menu"}>
                    <ul className={ setShowMenu ? "web-menu" : "mob-menu"} >
                        <li> <NavLink to="/" >Home</NavLink></li>
                        <li> <NavLink to="events" >Events</NavLink></li>
                        <li> <NavLink to="Catalog" >Catalog</NavLink></li>
                        <li> <NavLink to="services" >Services</NavLink></li>
                        <li> <NavLink to="about" >About</NavLink></li>
                        <li> <NavLink to="contact" >Contact</NavLink></li>
                        <li> <NavLink to="login" > Login </NavLink></li>
                    </ul>

                </nav>
                <div className='ham-menu'>
                    <button onClick={handleToggleButton} >
                        <GiHamburgerMenu className='toggle'/>
                    </button>
                </div>
            </div>
        </div>
    </header>
}
