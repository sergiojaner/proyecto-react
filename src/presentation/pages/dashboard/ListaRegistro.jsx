import React, { useContext, useEffect } from 'react'

import ItemList from '../../components/dashboard/ItemList';
import ItemHead from '../../components/dashboard/ItemHead';

import { UsuarioContext } from '../../../infraestructure/context/UsuariosContext';


const ListaRegistro = () => {

  const {usuarios} = useContext(UsuarioContext);   


  return (
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <ItemHead />
        </thead>
        <tbody>
            {
               usuarios?.map( (usuario) => (
                <ItemList key={usuario.id} usuario={usuario} />
               ))
            }            
           
        </tbody>
    </table>
   </div>
  )
}

export default ListaRegistro