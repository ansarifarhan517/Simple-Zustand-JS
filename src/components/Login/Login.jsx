import React, { useCallback } from 'react'
import './login.css'
import LoginCardImage from '../../assets/HeaderLogo.png'
import { useStore } from '../../store/store'
const Login = () => {

    const loginChanger = useStore((state) => state.loginChanger)

    const onSubmitHandler = useCallback(
        (e) => {
            e.preventDefault()
            loginChanger()
        },
      []
    )

    return (


        <div className='card'>
            <div className='imageContainer'>
                <img className='LoginCardImage' src={LoginCardImage} alt="" />

            </div>
            <div className='login'>
                <div className='loginHeader'>
                    <h2>Login </h2>
                </div>
                <input type='text' placeholder='Enter UserName' />
                <input type='password' placeholder='Enter Password' />
                <button className='loginSubmit' type="submit" onClick={onSubmitHandler}>Submit</button>
            </div>
        </div>

    )
}

export default Login