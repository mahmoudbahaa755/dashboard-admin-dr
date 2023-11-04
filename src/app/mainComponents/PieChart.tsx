'use client'
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, PieController } from 'chart.js';
import ChartHeader from '@/elements/ChartHeader';
Chart.register(ArcElement, CategoryScale, PieController);
const PieChart: React.FC = () => {
    const data = {
        labels: ["Lable1", "Lable2", "Lable3", "Lable4"],
        datasets: [{
            backgroundColor: [
                "rgba(255, 255, 255, 0.35)",
                "#ffffff",
                "rgba(255, 255, 255, 0.12)",
                "rgba(255, 255, 255, 0.71)"
            ],
            data: [13, 120, 11, 20],
            borderWidth: [0, 0, 0, 0]
        }]
    }
    const options= {
        responsive: true,
        cutout: '50%',

        legend: {
          position :"right",	
          display: true,
             labels: {
               fontColor: '#ddd',  
               boxWidth:15
            }
         }
        }
    const tableData = [
        { label: 'Direct', value: '$5856', percentage: '+55%', color: 'bg-white' },
        { label: 'Affiliate', value: '$2602', percentage: '+25%', color: 'bg-gray-200' },
        { label: 'E-mail', value: '$1802', percentage: '+15%', color: 'bg-gray-400' },
        { label: 'Other', value: '$1105', percentage: '+5%', color: 'bg-gray-600' },
    ];
    return (
        <div  >
          <ChartHeader title='Weekly sales' />
              <Pie data={data} options={options} />
              <div className="">
              <table className="table mt-3 ">
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index} className='border-gray w-fill border-t'>
                                <td className='px-4 py-2'><span className={`inline-block h-3 w-3 rounded-full ${data.color} mr-2`}></span> {data.label}</td>
                                <td className='px-4 py-2'>{data.value}</td>
                                <td className='px-4 py-2'>{data.percentage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           </div>
        </div>
    );
};

export default PieChart;