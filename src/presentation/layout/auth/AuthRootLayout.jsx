import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthRootLayout = () => {
  return (
    <section className="w-full h-screen flex">
        
        <div className="w-8/12 h-full flex justify-center items-center">
            <img src="src/assets/svg/Inicio.svg" alt="portada" />
        </div>



        <div className="w-4/12 h-full flex justify-center items-center ">
            
           <div className='w-[400px] h-[600px] p-3 flex flex-column justify-center items-center'>
               <Outlet />
           </div>
               
            
        </div>
       
    </section>
  )
}

export default AuthRootLayout