import { createContext, useEffect, useRef, useState } from "react";
// import { songsData } from "../assets/assets";
import axios from 'axios';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    
    // seekBg será a parte da música que ainda não foi ouvida, enquanto seekBar será a parte que já foi ouvida
    const seekBg = useRef();
    const seekBar = useRef();

    // Variável usada como base para linkar o back e o front
    const url = 'https://spotify-backend-breno-vieira.vercel.app'
    // Criando as variaveis songData e albumData para referenciar o front. Elas iniciam como vetores vazios
    const [songsData, setSongsData] = useState([]);
    const [albumsData, setAlbumsData] = useState([]);

    // volBg será a barra de volume possível, enquanto volBar será o volume atual
    const volBg = useRef();
    const volBar = useRef();

    // variável que guarda o tamanho da barra de volume para voltar ao tamanho de antes de mutar
    const [oldVol, setOldVol] = useState(10); // Volume padrão de 20%
    
    // Flag usada para voltar ao som antes de mutar ao clicar no botão de volume
    const [isMuted, setIsMuted] = useState(false);

    // variável para minimizar a barra lateral direita, começando minimizada
    const [isMinized, setIsMinimized] = useState(false);

    // Aqui o useState atualizará o estado da barrinha de progresso à medida que a música avança
    const [track, setTrack] = useState(songsData[0]);
    // Variável que confere se a música está ou não pausada, definindo o valor padrão para o carregamento do site
    const [playStatus, setPlayStatus] = useState(false)
    // Atualiza o volume baseado na faixa de volume
    const [volStatus, setVolStatus] = useState(10)
    // Variável que armazena a duração total da música e o momento atual
    const [time, setTime] = useState({
        currentTime: {
            second: '00',
            minute: 0,
        },
        
        totalTime: {
            second: '00',
            minute: 0,
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        await songsData.map((item) => {
            if(id === item._id) {
                setTrack(item);
            }
        })

        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async () => {
        songsData.map(async (item, index) => {
            if (track._id === item._id && index > 0) {
                await setTrack(songsData[index-1])
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const next = async () => {
        songsData.map(async (item, index) => {
            if (track._id === item._id && index + 1 < songsData.length) {
                await setTrack(songsData[index+1])
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const mute = () => {
        if (isMuted) {
            if (volBar.current) {
                // volBar.current.style.width = oldVol + "%";
            }
            audioRef.current.volume = oldVol / 100;
            setVolStatus(oldVol);
            setIsMuted(false);
        } else {
            const currentVol = audioRef.current.volume * 100;
            setOldVol(currentVol);
            if (volBar.current) {
                // volBar.current.style.width = "0%";
            }
            audioRef.current.volume = 0;
            setVolStatus(0);
            setIsMuted(true);
        }
    };
    

    const minimizableWindow = () => {
        setIsMinimized(!isMinized);
        console.log("minimizableWindow: " + isMinized);
    }


    // Essa função será feita baseando-se no offset, encontrado em nativeEvent dentro do objeto.
    // Esse atributo retorna em qual ponto a linha foi clicada e dividindo-o pelo tamanho do objeto (dessa linha)
    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }

    const volSong = async (e) => {
        const volumeBarPercent = e.nativeEvent.offsetX / volBg.current.offsetWidth;
        volBar.current.style.width = (volumeBarPercent) * 100 + "%";
        console.log('volume Percent: ' + volumeBarPercent);
        audioRef.current.volume = volumeBarPercent;
        setVolStatus(Math.floor(volumeBarPercent * 100));
        console.log('volumePercent * 100: ' + Math.floor(volumeBarPercent * 100));
    };

    // Função que recupera música do DB
    const getSongsData = async () => {
        try {
            const response = await axios.get(`${url}/api/song/list`);
            console.log("Songs Response:", response.data); // Adicione este log
            setSongsData(response.data.songs);
            setTrack(response.data.songs[0]);
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    }
    
    const getAlbumsData = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`);
            console.log("Albums Response:", response.data); // Adicione este log
            setAlbumsData(response.data.albums);
        } catch (error) {
            console.error("Error fetching albums:", error);
        }
    }
    

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volStatus / 100;
            // volBar.current.style.width = volStatus + "%";
    
            const updateTime = () => {
                if (audioRef.current.duration) { // Verifica se a duração é válida
                    setTime({
                        currentTime: {
                            second: Math.floor(audioRef.current.currentTime % 60) < 10 ? `0${Math.floor(audioRef.current.currentTime % 60)}` : Math.floor(audioRef.current.currentTime % 60),
                            minute: Math.floor(audioRef.current.currentTime / 60),
                        },
                        totalTime: {
                            second: Math.floor(audioRef.current.duration % 60) < 10 ? `0${Math.floor(audioRef.current.duration % 60)}` : Math.floor(audioRef.current.duration % 60),
                            minute: Math.floor(audioRef.current.duration / 60),
                        }
                    });
                }
            };
    
            audioRef.current.ontimeupdate = updateTime;
        }
    }, [audioRef, volStatus]);
    
    useEffect(() => {
        getSongsData();
        getAlbumsData();
    }, [])
    
    // Esse componente poderá ser acessado em qualquer outro componente
    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        previous, next,
        seekSong,
        volBar, volBg,
        volSong, mute,
        volStatus, setVolStatus,
        isMinized, minimizableWindow,
        songsData, albumsData
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;