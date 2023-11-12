'use client'
import Image from 'next/image'; 
import React, { useState } from 'react';
import ChartHeader from '@/elements/ChartHeader';
import ProgressBar from '@/elements/ProgressBar';
import AddData from '@/elements/AddData'

// ...your products array...
interface Product {
  id: number;
  name: string;
  img: string;
  productId: string;
  amount: string;
  date: string;
  shipping: number;
}

const initialProducts = [
  {
    id: 1,
    name: 'Iphone 5',
    img: 'https://via.placeholder.com/110x110',
    productId: '#9405822',
    amount: '$ 1250.00',
    date: '03 Aug 2017',
    shipping: 90
  },
  {
    id: 2,
    name: 'Earphone GL',
    img: 'https://via.placeholder.com/110x110',
    productId: '#9405820',
    amount: '$ 1500.00',
    date: '03 Aug 2017',
    shipping: 60
  },
  {
    id: 3,
    name: 'HD Hand Camera',
    img: 'https://via.placeholder.com/110x110',
    productId: '#9405830',
    amount: '$ 1400.00',
    date: '03 Aug 2017',
    shipping: 70
  },
  {
    id: 4,
    name: 'Classic Shoes',
    img: 'https://via.placeholder.com/110x110',
    productId: '#9405825',
    amount: '$ 1200.00',
    date: '03 Aug 2017',
    shipping: 100
  },
  {
    id: 5,
    name: 'Hand Watch',
    img: 'https://via.placeholder.com/110x110',
    productId: '#9405840',
    amount: '$ 1800.00',
    date: '03 Aug 2017',
    shipping: 40
  },
  {
    id: 6,
    name: 'Classic Shoes',
    img: 'https://via.placeholder.com/110x110',
    productId: '#9405825',
    amount: '$ 1200.00',
    date: '03 Aug 2017',
    shipping: 100
  },
];

const headers = ['Product', 'Photo', 'Product ID', 'Amount', 'Date', 'Shipping','edit','delete'];

const BlogsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(initialProducts);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (product: Product) => {
    // Handle edit
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="bg-inner rounded mt-5">
      <div className="w-full lg:w-full">
        <div className="shadow  flex flex-col rounded-lg p-6">
          <ChartHeader input='...' title='Recent Order Tables'/>
          <input
  type="text"
  placeholder="Search..."
  value={searchTerm}
  onChange={handleSearch}
  className="p-2 text-base border-gray-300 float-right lg:w-1/2 text-black bg-gray-100"
/>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-l font-semibold tracking-wide text-left text-white uppercase border-b ">
                  {headers.map((header, index) => (
                    <th key={index} className="px-4 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>
                      <Image
                        src={product.img}
                        alt={product.name}
                        width={64} // w-16
                        height={64} // h-16
                        className="mt-1" 
                      />
                    </td>
                    <td>{product.productId}</td>
                    <td>{product.amount}</td>
                    <td>{product.date}</td>
                  <td>
        <ProgressBar completed={product.shipping} />
      </td>
      <td>
        <button onClick={() => handleEdit(product)}>            <AddData />
</button>
      </td>
      <td  className='flex justify-center pt-5 items-cneter'>
         <button onClick={() => handleDelete(product.id)}>
         <Image src='/svg/delete.svg' width={35} height={35} alt='delete icon' />

         </button>
      </td>
    </tr>
  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsTable;