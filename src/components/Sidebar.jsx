import React from 'react';

function Sidebar() {
  return (
    <div>
        <div className="text-gray-100 text-xl">
          <div className='p-2.5 mt-1 flex items-center'>
            <h1 className='font-bold text-gray-200 text-[15px] ml-3'>Main</h1>
          </div>
          <hr className='my-2 text-gray-600'></hr>
        </div>

        <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white'>
          <span className='text-[15px] ml-4 text-gray-200'>Dashboard</span>
        </div>

        <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white'>
          <span className='text-[15px] ml-4 text-gray-200'>Apps</span>
        </div>

        <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white'>
          <span className='text-[15px] ml-4 text-gray-200'>Expertos</span>
        </div>

        <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white'>
          <span className='text-[15px] ml-4 text-gray-200'>Clientes</span>
        </div>

        <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white'>
          <span className='text-[15px] ml-4 text-gray-200'>Proyectos</span>
        </div>
    </div>
  );
};

export default Sidebar;