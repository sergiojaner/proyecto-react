import React from 'react'
import 'chart.js/auto';
import BarChart from '../../components/graficas/BarChart';
import BarChartMunicipio from '../../components/graficas/BarChartMunicipio';

const Graficas = () => {

  return (
    
   <>
   <div className="flex gap-7">
    <div className="font-bold" style={{width: '30%', height:'500px', textAlign:'center'}}>
       <h2>Cantidad de Usuarios Por Servicio</h2>
       <BarChart />
    </div>
    <div className="font-bold" style={{width: '70%', height:'500px', textAlign:'center'}}>
       <h2>Cantidad de Usuarios Por Municipio</h2>
       <BarChartMunicipio />
    </div>
    </div>
  </> 
    
   
  )
}

export default Graficas