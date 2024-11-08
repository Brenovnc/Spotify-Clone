import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import { assets } from '../assets/assets';

function RightBarSong() {
    const { track, minimizableWindow } = useContext(PlayerContext);

    return track ? (
        <div className='w-[25%] h-full p-2 pl-0 flex-col text-white hidden lg:flex'>
            <div className='bg-[#121212] h-full flex flex-col overflow-auto'>
                <div className='bg-[#121212] pl-3 pr-2 py-3 rounded-lg flex justify-between gap-1 sticky top-0 z-10 shadow-xl'>
                    <p className='pt-1 text-extrabold w-full overflow-hidden max-w-[120px] whitespace-nowrap relative'>{track.name}</p>
                    <span className='flex'>
                        <img className='w-8 p-2 rounded-2xl cursor-pointer' src={assets.ThreeDots} alt="" />
                        <img onClick={minimizableWindow} className='w-8 p-2 rounded-2xl cursor-pointer' src={assets.x} alt="" />
                    </span>
                </div>
                <div className='px-3'>
                    <img className='rounded-lg' src={track.image} alt="" />
                </div>
                <div className='p-3'>
                    <p className='text-extrabold text-[20px] w-full overflow-hidden max-w-[200px] whitespace-nowrap relative'>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
                
                <div className='p-3 py-2'>
                    <div className='relative grid grid-rows-[150px_auto] bg-[#242424] rounded-lg shadow-md overflow-hidden'>
                        {/*-- Parte superior fixa -- */}
                        <div className="relative">
                            <img className='w-full h-[150px] object-cover' src={track.image} alt="Imagem do artista" />
                            <p className='text-base drop-shadow-lg absolute top-3 left-3 text-white text-lg font-bold mb-2'>Sobre o Artista</p>
                        </div>

                        {/* -- Parte inferior variável -- */}
                        <div className='p-4'>
                            <p className='font-bold'>Artist Name</p>
                            <div className='flex gap-2 pt-2'>
                                <p className='text-gray-300'>18.316.961 ouvintes mensais</p>
                                <button className='font-semibold border-2 border-gray-500 rounded-[23px] px-3 h-[35px] text-[15px]'>Follow</button>
                            </div>
                            <p className='text-gray-300 text-[15px] pt-4 line-clamp-3'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Créditos */}
                <div className='p-3 pt-1 pb-2'>
                    <div className='flex flex-col gap-3 p-4 bg-[#242424] rounded-lg'>
                        <div className='flex justify-between'>
                            <p className='font-bold text-white'>Créditos</p>
                            <p className='text-gray-400 text-[15px]'>Mostrar tudo</p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-semibold'>Autor's name</p>
                                <p className='text-[14px] text-gray-400'>Artista principal, produtor</p>
                            </div>
                            <button className='font-semibold border-2 border-gray-500 rounded-[23px] px-3 h-[35px] text-[15px]'>Follow</button>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-semibold'>Compositor's name</p>
                                <p className='text-[14px] text-gray-400'>Compositor</p>
                            </div>
                            <button className='font-semibold border-2 border-gray-500 rounded-[23px] px-3 h-[35px] text-[15px]'>Follow</button>
                        </div>
                    </div>
                </div>

                {/* Em turnê */}
                <div className='p-3 pt-1 pb-2 w-full'>
                    <div className='flex flex-col gap-3 p-4 bg-[#242424] rounded-lg shadow-md'>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-white'>Em turnê</p>
                            <button className='text-gray-400 text-sm'>Mostrar tudo</button>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-black text-white w-16 h-16 flex flex-col items-center justify-center rounded-md'>
                                <p className='text-xs'>Dez.</p>
                                <p className='text-2xl font-bold'>13</p>
                            </div>
                            <div>
                                <p className='text-base font-bold text-white'>Paris</p>
                                <p className='text-gray-400 text-sm'>Banda/Artista</p>
                                <p className='text-gray-500 text-xs'>sex., 18:00 • YouTube...</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-black text-white w-16 h-16 flex flex-col items-center justify-center rounded-md'>
                                <p className='text-xs'>Abr.</p>
                                <p className='text-2xl font-bold'>12</p>
                            </div>
                            <div>
                                <p className='text-base font-bold text-white'>Las Vegas</p>
                                <p className='text-gray-400 text-sm'>Banda/Artista</p>
                                <p className='text-gray-500 text-xs'>sáb., 19:00 • Las Vegas...</p>
                            </div>
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    ) : null
}

export default RightBarSong;
