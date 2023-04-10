import React from 'react'

const ItemHead = () => {
  return (
    <tr>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Municipio
                </th>
                <th scope="col" className="px-6 py-3">
                    Telefono
                </th>
                <th scope="col" className="px-6 py-3">
                    Dirección
                </th>
                <th scope="col" className="px-6 py-3">
                    Acueducto
                </th>
                <th scope="col" className="px-6 py-3">
                    Alcantarillado
                </th>
                <th scope="col" className="px-6 py-3">
                    Acciones
                </th>
    </tr>
  )
}

export default ItemHead