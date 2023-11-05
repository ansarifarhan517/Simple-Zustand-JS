import React, { ChangeEvent, ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import './login.css'
import LoginCardImage from '../../assets/HeaderLogo.png'
import { useStore } from '../../store/store'

const Login: React.FC = () => {
    const [passwordField, setPasswordField] = useState('')
    const [userNameField, setUserNameField] = useState('')

    const loginChanger = useStore((state) => state.loginChanger)
    const users = useStore((state) => state.users)
    const getUsers = useStore((state) => state.getUsers)

    useEffect(() => {
    
      return () => {
        
      }
    }, [])
    

    const onSubmitHandler: React.MouseEventHandler = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>): void => {
            if (users.length === 0) getUsers()
            if (passwordField && userNameField) {
                const validUser = users.find((user) => user.username === userNameField && user.username === passwordField)
                validUser && loginChanger(true);
            }
            getUsers()
        },
        [passwordField, userNameField, users]
    );

    const onChangeHandler: ChangeEventHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.type === 'password') {
            setPasswordField(e.target.value);
          } else {
            setUserNameField(e.target.value);
          }
        },
        []
      );



    return (


        <div className='card'>
            <div className='imageContainer'>
                <img className='LoginCardImage' src={LoginCardImage} alt="" />

            </div>
            <div className='login'>
                <div className='loginHeader'>
                    <h2>Login </h2>
                </div>
                <input name="username" type='text' onChange={onChangeHandler} placeholder='Enter UserName' />
                <input name='password' type='password' onChange={onChangeHandler} placeholder='Enter Password' />
                <button className='loginSubmit' type="submit" onClick={onSubmitHandler}>Submit</button>
            </div>
        </div>

    )
}

export default Login