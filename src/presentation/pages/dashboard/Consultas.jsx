import React from 'react'

const Consultas = () => {
  return (
    
    <section className="w-full h-[730px] rounded-2xl p-5 flex flex-col">
       <div className="w-full text-center text-2xl font-bold">Consultas</div>
       
       <div className="h-full w-full p-5">
          
         <form className='w-full'>

         <div>
           <label htmlFor="municipio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Municipio</label>
           <select name="municipio" autoComplete='off' id="municipio" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option value="">Seleccione una opción</option>
               <option value="Pivijay">Pivijay</option>
               <option value="Plato">Plato</option>
               <option value="Tamalameque">Tamalameque</option>
               <option value="Zona Bananera">Zona Bananera</option>
               <option value="Tenerife">Tenerife</option>
           </select>
           
        </div>

         <div className="flex flex-row gap-3">
            
            <div className="flex-1">
            <label htmlFor="acue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Acueducto</label>
            <select name="acueducto" autoComplete='off' id="acue" className="w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Seleccione una opción</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
            </select>                      
                       
            </div>
 
            <div className="flex-1">
            <label htmlFor="alc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alcantarillado</label>
            <select name="alcantarillado" autoComplete='off' id="alc" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Seleccione una opción</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
            </select>
            
            </div>
 
         </div>

  

         </form>

       </div>
    </section>
  )
}

export default Consultas