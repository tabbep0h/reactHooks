import React from 'react'

function RegisterForm() {
  return (
    <form style = {{"fontFamily":"Gill Sans, sans-serif"}}>
      <h1>Регистрация</h1>
      <input placeholder='Введите имя'/><br></br>
      <input placeholder='Введите пароль'/><br></br>
      <button>Зарегистрироваться</button>
    </form>
  )
}

export default RegisterForm