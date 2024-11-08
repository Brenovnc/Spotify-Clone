import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import RightBarSong from './components/RightBarSong'

const App = () => {

    // Uma referência para o componente PlayerContext, que será responsável por dar funcionalidade ao player de música
    const { audioRef, track, isMinized, songsData } = useContext(PlayerContext);

    return (
        <div className='h-screen bg-black'>
            {
                songsData.lenght !== 0
                    ? <>
                        <div className='h-[90%] flex'>
                            <Sidebar></Sidebar>
                            <Display></Display>
                            {!isMinized && <RightBarSong></RightBarSong>}
                        </div>
                        <Player></Player>
                    </>
                    : null
            }
            {/* A tag audio que recebe a referência do componente PlayerContext */}
            <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio>
        </div>
    )
}

export default App