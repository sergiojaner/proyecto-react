import React from 'react'

const Rutas = [
    {
      path:"",
      name:"Consulta Usuarios",
      icono:"FiSearch"
    }
]



const Ruta = () => {
  return (
    <NavLink to="/dashboard/Consultas">
                  <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">                     
                     <FiSearch className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Consulta Usuarios</span>
                  </div>
    </NavLink>
  )
}

export default Ruta