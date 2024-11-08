import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

function Player() {

    const {track, seekBar, seekBg, playStatus, play, pause, audioRef, time, previous,
            next, seekSong, volBar, volBg, volSong, mute, volStatus, minimizableWindow} = useContext(PlayerContext);

    // Calcula o progresso da música para criar a bolinha que segue a barrinha
    const progress = (audioRef.current?.currentTime / audioRef.current?.duration) * 100 || 0;

    return track ? (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img onClick={minimizableWindow} className="w-12 cursor-pointer" src={track.image} alt=""/>
            <div>
                <p className='w-full overflow-hidden max-w-[200px] whitespace-nowrap relative'>{track.name}</p>
                <p className='w-full overflow-hidden max-w-[200px] whitespace-nowrap relative'>{track.desc.slice(0, 12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4 '>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                {playStatus
                ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                }
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>

                {/* Vida usada para a linha de reprodução, onde o Hr é a linha verde da música e o span a bolinha */}
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-500 rounded-full cursor-pointer relative group'>
                    <hr ref={seekBar} className='h-1 border-none bg-gray-300 rounded-full group-hover:bg-green-800 transition-all' style={{ width: `${progress}%` }}/>
                    {/* A bolinha branca só aparece no hover */}
                    <span className='absolute top-1/2 transform -translate-y-1/2 bg-white w-3 h-3 rounded-full transition-all opacity-0 group-hover:opacity-100'style={{ left: `calc(${progress}% - 6px)` }}></span>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.plays_icon} alt="" />
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            {volStatus >= 50
                ? <img className='w-4 cursor-pointer' onClick={mute} src={assets.volume_icon} alt="" />
                : volStatus === 0
                ? <img className='w-4 cursor-pointer' onClick={mute} src={assets.volume_mutado} alt="" />
                : <img className='w-4 cursor-pointer' onClick={mute} src={assets.volume_pokin} alt="" />
            }
            <div ref={volBg} onClick={volSong} className='w-20 bg-gray-700 h-1 rounded cursor-pointer relative group'>
                {/* Barra de volume */}
                <hr ref={volBar} className='h-1 border-none w-4 bg-slate-50 rounded-full transition-all group-hover:bg-green-800' />
                {/* Bolinha branca da barra de volume */}
                <span className='absolute top-1/2 transform -translate-y-1/2 bg-white w-3 h-3 rounded-full transition-all opacity-0 group-hover:opacity-100' style={{ left: `calc(${volStatus}% - 6px)` }}></span>
            </div>
            <img className='w-4' src={assets.mini_player_icon} alt="" />
            <img className='w-4' src={assets.zoom_icon} alt="" />
        </div>
    </div>
    ) : null
}

export default Player