import React from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faDollarSign, faGem, faUser } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
    return(

    <div>
        <Header/>
        <h1 className='text-lg ml-64'>Welcome Admin !</h1>
        <h1 className='text-base text-gray-400 ml-64'>Dashboard</h1>
        <div className="container mx-auto flex flex-wrap ml-64">
                <div className="w-full md:w-1/4 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                        <FontAwesomeIcon icon={faCubes} color="orange" size='2x'/>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 ml-36">Proyectos</h2>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                        <FontAwesomeIcon icon={faDollarSign} color="orange" size='2x'/>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 ml-40">Clientes</h2>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                        <FontAwesomeIcon icon={faGem} color="orange" size='2x'/>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 ml-44">Tareas</h2>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                        <FontAwesomeIcon icon={faUser} color="orange" size='2x'/>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 ml-40">Expertos</h2>
                    </div>
                </div>
            </div>

            <div className='container mx-auto flex flex-wrap ml-64'>
                    <div className='w-full md:w-1/2 p-4'>
                        <div className='bg-white border rounded-md p-4'>
                        <h2 className="text-xl font-bold mb-2 text-gray-950">Estadísticas</h2>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 p-4'>
                        <div className='bg-white border rounded-md p-4'>
                        <h2 className="text-xl font-bold mb-2 text-gray-950">Estadísticas de Tarea</h2>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default DashboardPage;
