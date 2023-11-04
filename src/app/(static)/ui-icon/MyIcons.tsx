// import React from 'react';
// import svgArray from '../../../../public/svg/iconloader'; 
// import Image from 'next/image';
// interface SvgModule {
//     default: {
//         src: string;
//         [key: string]: any;
//     };
// }

// interface UniqueItem {
//     name: string;
//     [key: string]: any;
// }
// export default function MyComponents() {
//     const width=25;
//     const height=25;
  

//     const modifiedSvgArray = svgArray.reduce((unique: UniqueItem[], module: SvgModule) => {
//         const filename = module.default.src.split('/').pop();
//         const name = filename.split('.')[0];
//         if (!unique.some((item: UniqueItem) => item.name === name)) {
//             unique.push({ ...module.default, name });
//         }
//         return unique;
//     }, []);
   
//     return (
//         <div className=''>
//             <h1 className='border-b border-gray mb-2 font-bold text-3xl'>My Icons </h1>
//         <div className='flex flex-wrap mt-3 px-4 flex-row gap-10'>
//             {modifiedSvgArray.map((icon, index) => (
//                 <div className='flex justify-center items-center flex-row gap-4' key={index}>
//                     <Image src={icon.src} width={width} height={height} alt={icon.name}/> {icon.name}
//                 </div>
//             ))}
//         </div>
//     </div>
//     );
// }