import { useMemo } from "react";
import { BaseChart } from "./BaseChart";

export type ChartProps = {
  data:number[],
  maxDataPoints:number
}
export function Chart(props:ChartProps){
  const prepareData = useMemo(()=>{
    const points = props.data.map(point=>{return {value:point*100}})
   return [
    ...points,
    ...Array.from({length:props.maxDataPoints-points.length}).map(()=>({value:undefined}))
   ]
  },[props.data])
  return <BaseChart data={prepareData} fill='#0A4D5C' stroke='#5DD4EF'></BaseChart>
}