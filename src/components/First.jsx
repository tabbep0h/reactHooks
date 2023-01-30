import React from 'react'
import { RegisterForm,LoginForm } from './index'

function First() {
  
    const [ form, setForm ] = React.useState("login")

    const setFormF = () => {
        if ( form === "login"){
            setForm('register')
        }   else {
            setForm('login')
        }

    }
  
    return (
    <div>
        {form === "login" ? <RegisterForm/> : <LoginForm/> }
        <button onClick={setFormF}>Сменить форму </button>
    </div>
  )
}

export default First