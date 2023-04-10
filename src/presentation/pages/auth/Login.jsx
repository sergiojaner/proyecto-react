import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();


  return (
    <form className='w-full' onSubmit={() => {navigate("/dashboard")}}>
        <div className='w-full flex justify-center'>
          <img src="https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg" width="100px"/>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese un correo electrónico" autoComplete='off'  />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese una contraseña" autoComplete='off'  />
        </div>
        
        <div className="w-full flex justify-center">
          <button type="submit" className="text-white bg-sky-400 px-14 py-2 rounded-full hover:bg-blue-500 transition-colors" >Ingresar</button>
        </div>

        <div className="w-full text-sm mt-3 flex justify-center">
          <p>Si no tiene una cuenta, Puede <span className="font-bold cursor-pointer" onClick={() => { navigate("/register")} }>¡registrarse aqui!</span></p>
        </div>
        
    </form>
  )
}

export default Login