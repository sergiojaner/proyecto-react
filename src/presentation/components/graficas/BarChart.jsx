import React, { useCallback, useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { supabase } from '../../../createClient';

const BarChart = () => {

    const [queryAcue, setQueryAcue] = useState([])
    const [queryAlc, setQueryAlc] = useState([])
    
  
    useEffect(() => {
      conteoUsuariosAcue(),
      conteoUsuariosAlc()
    },[queryAcue])
  
    const conteoUsuariosAcue = useCallback(async () => {
      const {data} = await supabase.from('usuarios').select('*', {count:'exact'}).match({acueducto: 'Si'})
      setQueryAcue(data?.length);
    }, [])
  
    const conteoUsuariosAlc = useCallback(async () => {
      const {data} = await supabase.from('usuarios').select('*', {count:'exact'}).match({alcantarillado: 'Si'})
      setQueryAlc(data?.length);
    }, [])
    
  
    const data = {
      labels:['Acueducto', 'Alcantarillado'],
      datasets:[{
        label:'Servicios',
        backgroundColor:'#0FBEFF',
        borderColor:'#0FBEFF',
        borderWidth:1,
        hoverBackgroundColor:'#279CC8',
        hoverBorderColor:'#279CC8',
        data:[queryAcue, queryAlc]
      }]
    };
  
    const opciones = {
      maintainAspectRatio: false,
      responsive: true
    }

  return (
    
       <Bar data={data} options={opciones} />
    
  )
}

export default BarChart