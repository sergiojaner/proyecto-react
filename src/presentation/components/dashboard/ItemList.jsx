
import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { UsuarioContext } from "../../../infraestructure/context/UsuariosContext";


const ItemList = (props) => {


    const {eliminarUsuarios} = useContext(UsuarioContext);  

    const eliminarRegistro = async(usuarioid) => {
        await eliminarUsuarios(usuarioid)

    }


 
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {props.usuario.nombre}
                </th>
                <td className="px-6 py-4">
                    {props.usuario.municipio}
                </td>
                <td className="px-6 py-4">
                    {props.usuario.telefono}
                </td>
                <td className="px-6 py-4">
                    {props.usuario.direccion}
                </td>
                <td className="px-6 py-4">
                    {props.usuario.acueducto}
                </td>
                <td className="px-6 py-4">
                    {props.usuario.alcantarillado}
                </td>
                <td className="px-6 py-4 flex gap-3">
                    <FaEdit size="16px" color='green' />
                    <FaTrash size="16px" color='red' onClick={() => eliminarRegistro(props.usuario.id)} />
                </td>
    </tr>
  )
}

export default ItemList