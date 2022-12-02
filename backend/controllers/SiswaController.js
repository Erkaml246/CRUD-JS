import Siswa from "../models/SiswaModel.js";

export const getStudents = async (req, res) => {
    try {
        const siswa = await Siswa.find();
        res.json(siswa);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getSiswaById = async (req, res) => {
    try {
        const siswa = await Siswa.findById(req.params.id);
        res.json(siswa);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveSiswa = async (req, res) => {
    const siswa = new Siswa(req.body);
    try {
        const insertedsiswa = await siswa.save();
        res.status(201).json(insertedsiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateSiswa = async (req, res) => {
    try {
        const updatedsiswa = await Siswa.updateOne({_id:req.params.id},{$set: req.body});
        res.status(200).json(updatedsiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteSiswa = async (req, res) => {
    try {
        const deletedsiswa = await Siswa.deleteOne({_id:req.params.id});
        res.status(200).json(deletedsiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}