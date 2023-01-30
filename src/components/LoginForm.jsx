import React from 'react'

function LoginForm() {
  return (
    <form style = {{"fontFamily":"Gill Sans, sans-serif"}}>
        <h1>Авторизация</h1>
        <input placeholder='Введите имя'/><br></br>
        <input placeholder='Введите пароль'/><br></br>
        <button>Авторизоваться</button>
    </form>
  )
}

export default LoginForm