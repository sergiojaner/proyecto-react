import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthRootLayout = () => {
  return (
    <section className="w-full h-screen flex">
        
        <div className="w-8/12 h-full flex justify-center items-center">
            <img src="https://media.istockphoto.com/id/1279651694/vector/a-man-works-at-a-laptop-and-drinks-coffee-home-office-freelance-and-online-training.jpg?s=612x612&w=0&k=20&c=g4KWQrZg1NqxlqIcRL7IcyofMB7UI742v-zJQOm9LfQ=" alt="portada" />
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