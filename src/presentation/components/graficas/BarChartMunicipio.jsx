import React, { useCallback, useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { supabase } from '../../../createClient';

const BarChartMunicipio = () => {

    const [queryPivijay, setQueryPivijay] = useState([])
    const [queryPlato, setQueryPlato] = useState([])
    const [queryTk, setQueryTk] = useState([])
    const [queryzb, setQueryzb] = useState([])
    const [querytenerife, setQuerytenerife] = useState([])
    
  
    useEffect(() => {
      conteoUsuariosPivijay(),
      conteoUsuariosPlato(),
      conteoUsuariostk(),
      conteoUsuarioszb(),
      conteoUsuariostenerife()
    },[])
  
    const conteoUsuariosPivijay = useCallback(async () => {
      const {data} = await supabase.from('usuarios').select('*', {count:'exact'}).match({municipio: 'Pivijay'})
      setQueryPivijay(data?.length);
    }, [])
  
    const conteoUsuariosPlato = useCallback(async () => {
      const {data} = await supabase.from('usuarios').select('*', {count:'exact'}).match({municipio: 'Plato'})
      setQueryPlato(data?.length);
    }, [])
    const conteoUsuariostk = useCallback(async () => {
      const {data} = await supabase.from('usuarios').select('*', {count:'exact'}).match({municipio: 'Tamalameque'})
      setQueryTk(data?.length);
    }, [])
    const conteoUsuarioszb = useCallback(async () => {
      const {data} = await supabase.from('usuarios').select('*', {count:'exact'}).match({municipio: 'Zona Bananera'})
      setQueryzb(data?.length);
    }, [])
    const conteoUsuariostenerife = useCallback(async () => {
      const {data} = await supabase.from('usuarios').select('*', {count:'exact'}).match({municipio: 'Tenerife'})
      setQuerytenerife(data?.length);
    }, [])
    
  
    const data = {
      labels:['PIVIJAY', 'PLATO', 'TAMALAMEQUE', 'ZONA BANANERA', 'TENERIFE'],
      datasets:[{
        label:'Municipio',
        backgroundColor:'#9BE340',
        borderColor:'#9BE340',
        borderWidth:3,
        hoverBackgroundColor:'#89B355',
        hoverBorderColor:'#89B355',
        data:[queryPivijay, queryPlato, queryTk, queryzb, querytenerife]
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

export default BarChartMunicipio