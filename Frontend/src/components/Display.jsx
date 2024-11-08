import React, { useContext, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
// import { albumsData } from '../assets/frontend-assets/assets'
import RightBarSong from './RightBarSong'
import { PlayerContext } from '../context/PlayerContext'
// import DisplaySong from './DisplaySong'

const Display = () => {

    const {albumsData} = useContext(PlayerContext);
    
    const displayRef = useRef();
    
    // coleta a rota do album clicado (ex: ../album/1)
    const location = useLocation();
    
    // Caso a informação acima inclua "album", isAlbum recebe True
    const isAlbum = location.pathname.includes("album");
    
    // if isAlbum for verdadeiro, então coleto seu ID (último digito)
    // const albumID = isAlbum ? location.pathname.slice(-1): ""; //Isso era através de arquivos
    // Com o backent, funciona diferente
    const albumID = isAlbum ? location.pathname.split('/').pop() : "";
    
    // Coleta o background do album atual coletado acima
    // const bgColor = albumsData[Number(albumID)].bgColor; // A cor do album também funciona diferente agora
    const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((x)=> (x._id == albumID)).bgColour : "#121212"
    

    // Sempre que o componente é atualizado, essa função é chamada para ser executada
    // queremos executá-la somente quando estivermos dentro do álbum
    useEffect(() => {
        if(isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
        }
        else {
            displayRef.current.style.background = `#121212`
        }
    })

    return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        {albumsData.length > 0
        ?
        /* Criação das rotas para a HomePage e para o AlbumPage */
        <Routes>
            <Route path='/' element={<DisplayHome/>}></Route>
            <Route path='/album/:id' element={<DisplayAlbum album={albumsData.find((x)=>(x._id == albumID))}/>}></Route>
        </Routes>
        : null
        }
    </div>
  )
}

export default Display