import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import Error from '../../components/shared/Error';
import { supabase } from '../../../createClient';
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../../infraestructure/context/UsuariosContext';


const Registro = () => {

  const {agregarUsuarios} = useContext(UsuarioContext);

  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();

  const crearUsuario = async(data) => {
     await agregarUsuarios(data)
     navigate('/dashboard/ListaRegistro') 
  }


  return (
    
    <section className="w-full max-h-[800px]">
      <form onSubmit={handleSubmit(crearUsuario)}>

        <div className="relative z-0 w-full mb-6 group">
            <input {...register("nombre", { required: true })} type="text" name="nombre" autoComplete='off' id="floating_nombre" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_nombre" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
            {errors.nombre?.type === 'required' && <Error>El nombre es requerido</Error>}
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input {...register("telefono", { required: true, minLength: 7 })} type="tel" autoComplete='off' name="telefono" id="floating_tel" className="block py-2.5 px-0 w-full text-sclassm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_tel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono</label>
            {errors.telefono?.type === 'required' && <Error>El numero de teléfono es requerido</Error> }
            {errors.telefono?.type === 'minLength' && <Error>La cantidad de digitos mínimo debe ser 7</Error> }
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input {...register("direccion", { required: true })} type="text" name="direccion" autoComplete='off' id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección</label>
            {errors.direccion?.type === 'required' && <Error>La direccion es requerida</Error> }
        </div>

        <div>
           <label htmlFor="municipio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Municipio</label>
           <select {...register("municipio", { required: true })} name="municipio" autoComplete='off' id="municipio" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option value="">Seleccione una opción</option>
               <option value="Pivijay">Pivijay</option>
               <option value="Plato">Plato</option>
               <option value="Tamalameque">Tamalameque</option>
               <option value="Zona Bananera">Zona Bananera</option>
               <option value="Tenerife">Tenerife</option>
           </select>
           {errors.alcantarillado?.type === 'required' && <Error>La seleccion es requerida</Error> }
        </div>

        <div className="sm:flex-col md:flex md:flex-row gap-2 ">
            
           <div className="flex-1">
           <label htmlFor="acue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiene Acueducto?</label>
           <select {...register("acueducto", { required: true })} name="acueducto" autoComplete='off' id="acue" className="w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option value="">Seleccione una opción</option>
               <option value="Si">Si</option>
               <option value="No">No</option>
           </select>                      
           {errors.acueducto?.type === 'required' && <Error>La seleccion es requerida</Error> }             
           </div>

           <div className="flex-1">
           <label htmlFor="alc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiene Alcantarillado?</label>
           <select {...register("alcantarillado", { required: true })} name="alcantarillado" autoComplete='off' id="alc" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option value="">Seleccione una opción</option>
               <option value="Si">Si</option>
               <option value="No">No</option>
           </select>
           {errors.alcantarillado?.type === 'required' && <Error>La seleccion es requerida</Error> }
           </div>

        </div>

        

       
        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      
      </form>

    </section>


  )
}

export default Registro