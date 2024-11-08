import {v2 as cloudinary} from 'cloudinary';
import songModel from '../models/songModel.js';

const addSong = async(req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type: "video"});
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});
        const seconds = Math.floor(audioUpload.duration%60);
        const duration = `${Math.floor(audioUpload.duration/60)}: ${seconds > 9 ? seconds : '0' + seconds}`
        

        console.log(name, desc, album, audioUpload, imageUpload);

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        }

        // Salvando dados no database
        const song = songModel(songData);
        await song.save();

        res.json({success:true, message:"Música Adicionada!"});

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Música não adicionada"});
    }
}

const listSong = async(req, res) => {
    try {
        
        // Recuperando todas as músicas do BD em um array
        const allSongs = await songModel.find({}); // objetio vazio significa uma busca sem filtros, ou seja, retorna tudo
        res.json({success:true, songs: allSongs});

    } catch (error) {
        
        res.json({success:false});
    }
}

const removeSong = async (req, res) => {
    try {
        
        await songModel.findByIdAndDelete(req.body.id); // Removendo a musica a partir do id passado no request
        res.json({success: true, message: "Música Removida!"});

    } catch (error) {
        console.log(error)
        res.json({success: false});

    }
}

export {addSong, listSong, removeSong}