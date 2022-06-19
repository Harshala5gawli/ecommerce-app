import React, { useState } from 'react'
import Restaurant from './component/Restaurant'
import './App.css'

const App = () => {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const database = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ]

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    var { uname, pass } = document.forms[0]

    const userData = database.find((user) => user.username === uname.value)

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: 'pass', message: errors.pass })
      } else {
        setIsSubmitted(true)
      }
    } else {
      setErrorMessages({ name: 'uname', message: errors.uname })
    }
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    )

  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Username </label>
          <input type='text' name='uname' required />
          {renderErrorMessage('uname')}
        </div>
        <div className='input-container'>
          <label>Password </label>
          <input type='password' name='pass' required />
          {renderErrorMessage('pass')}
        </div>
        <div className='button-container'>
          <input type='submit' />
        </div>
      </form>
    </div>
  )

  return (
    <>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 700,
          Margin: '2rem',
        }}
      >
        iConnect Restaurant
      </h1>

      <div className='login-form'>
        {isSubmitted && isSubmitted ? (
          <div>
            <Restaurant />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </>
  )
}

export default App
