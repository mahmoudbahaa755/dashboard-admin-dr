import Image from 'next/image'
// import PieChart from './mainComponents/PieChart'
import SiteData from './mainComponents/SiteData'
// import LineChart from './mainComponents/LineChart'
import DashTable from './mainComponents/DashTable'

export default function Home() {
  return (
   <div className='container'>
   
    <SiteData/>
    <div className='flex flex-row gap-3 flex-wrap'>
{/*       
    <LineChart/>
    <PieChart /> */}
    </div>
    <DashTable/>
   </div>
  )
}
