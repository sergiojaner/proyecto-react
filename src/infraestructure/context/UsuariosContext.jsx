import React, { createContext, useCallback, useEffect, useState } from 'react'
import { supabase } from '../../createClient';
import Swal from 'sweetalert2'

export const UsuarioContext = createContext();




export const UsuariosProvider = ({children}) => {

  const [usuarios, setUsuarios] = useState([])


  useEffect(() => {
    fetchUsuarios()
  },[])


  const fetchUsuarios = useCallback(async () => {
    const {data} = await supabase.from('usuarios').select('*')      
    setUsuarios(data)    
  }, [])

  const agregarUsuarios = useCallback(async (data) => {
     await supabase.from('usuarios').insert({nombre: data.nombre, telefono: data.telefono, direccion: data.direccion, acueducto: data.acueducto, alcantarillado: data.alcantarillado, municipio: data.municipio })
     await fetchUsuarios()
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro agregado con éxito',
      showConfirmButton: true,
      timer: 1500
    })     
  }, [])

  const eliminarUsuarios = useCallback(async (usuarioid) => {
    
    await supabase.from('usuarios').delete().eq('id', usuarioid)
    await fetchUsuarios()
    Swal.fire({
      position: 'center',
      icon: 'danger',
      title: 'Registro eliminado con éxito',
      showConfirmButton: true,
      timer: 1500
    })
 }, [])

  




  return (
    
    <UsuarioContext.Provider value={{usuarios, agregarUsuarios, eliminarUsuarios}}>
      {children}      
    </UsuarioContext.Provider>

  )
}


