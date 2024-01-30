import React from 'react'

const Login = ({onLogin, onSetUserName}) => {
  return (
    <>
      <div className='bg-blue-400 p-10 mt-20 rounded-xl'>
          <h2 className='text-2xl p-4 mb-2 text-white'>Login : merci d'entrer ton nom</h2>
          <input
              type="text"
              placeholder='Ton Nom'
              className='w-full mb-4 p-2'
              onChange={onSetUserName}/>
          <button 
              className='w-full p-2 bg-blue-200 rounded' onClick={onLogin}>Login
          </button>
      </div>
    </>
  )
}

export default Login