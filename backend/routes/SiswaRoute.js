import express from "express";
import {getStudents,
       getSiswaById,
       saveSiswa,
       updateSiswa,
       deleteSiswa
} 
from "../controllers/SiswaController.js";
const router = express.Router();

router.get('/students', getStudents);
router.get('/students/:id', getSiswaById);
router.post('/students', saveSiswa);
router.patch('/students/:id', updateSiswa);
router.delete('/students/:id', deleteSiswa);



export default router