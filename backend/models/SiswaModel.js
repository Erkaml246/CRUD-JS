import mongoose, { Schema } from "mongoose";

const Siswa = mongoose.Schema({
    id_siswa:{
        type: String,
        required: true
    },
    nama_siswa:{
        type: String,
        required: true
    },
    jenis_kelamin:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    no_hp:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
});
export default mongoose.model('students',Siswa);