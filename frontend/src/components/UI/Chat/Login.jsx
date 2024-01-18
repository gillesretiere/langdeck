import React from 'react'

const Login = ({onLogin, onSetUserName}) => {
  return (
    <>
        <div className='bg-yellow-400 p-10 mt-20 rounded-xl'>
            <h2 className='text-2xl p-4 mb-2 text-white'>Login : Bitte deine UserNamme abgeben</h2>
            <input
                type="text"
                placeholder='Deine UserNamme'
                className='w-full mb-4 p-2'
                onChange={onSetUserName}/>
            <button 
                className='w-full bg-gray-400 rounded' onClick={onLogin}>Login
            </button>
        </div>
    </>
  )
}

export default Login