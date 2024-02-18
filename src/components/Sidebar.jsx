import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGaugeHigh, faCube, faUser, faRocket, faLayerGroup, faMoneyBill1, faClock } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-gray-100 text-xl bg-white">
      <button
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-400 text-white bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen}
        <FontAwesomeIcon icon={faBars} className="ml-2 text-gray-950" />
      </button>

      {isOpen && (
        <div className='fixed top-20 left-0 h-screen bg-slate-700 w-60'>          
          <div className='p-2.5 mt-1 flex items-center'>
           <a href="http://localhost:5173" className='font-bold text-gray-200 text-[15px] ml-3'>Main</a>
          </div>
          <hr className='my-2 text-gray-600'></hr>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faGaugeHigh} />
            <span className='text-[15px] ml-4 text-gray-200'>Dashboard</span>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faCube} />
            <span className='text-[15px] ml-4 text-gray-200'>Apps</span>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faUser} />
            <span className='text-[15px] ml-4 text-gray-200'>Expertos</span>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white ml-5'>
            <span className='text-[15px] ml-4 text-gray-200'>Clientes</span>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faRocket} />
            <span className='text-[15px] ml-4 text-gray-200'>Proyectos</span>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faLayerGroup} />
            <span className='text-[15px] ml-4 text-gray-200'>Pre Diagnostico</span>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faMoneyBill1} />
            <span className='text-[15px] ml-4 text-gray-200'>Factuación</span>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faClock} />
            <span className='text-[15px] ml-4 text-gray-200'>Reportes</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
