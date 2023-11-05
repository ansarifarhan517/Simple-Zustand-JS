import React from 'react'
import './header.css'
import Logo from '../../assets/HeaderLogo.png'
import { useStore } from '../../store/store'
const Header = () => {

    const loginChanger = useStore(state => state.loginChanger)
    
    const logoutHandler = () => {
        loginChanger(false)
    }
    return (
        <div className='header'>
            <img src={Logo} alt="Zustand" />
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Header