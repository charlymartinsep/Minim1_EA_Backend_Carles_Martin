import express from 'express';
import { 
    encontrarTodosLosComentarios, 
    encontrarComentario, 
    crearComentario, 
    actualizarComentario, 
    eliminarComentario 
} from '../controllers/comentarioControllers';

const router = express.Router();

// Ruta per a crear un comentari i llistar tots els comentaris
// POST per crear un comentari i GET per obtenir tots els comentaris
router.route('/')
    .post(crearComentario) // Crear un comentari nou
    .get(encontrarTodosLosComentarios); // Obtenir tots els comentaris

// Rutes per gestionar comentaris específics per ID (GET, PUT, DELETE)
// Aquestes rutes permeten obtenir, actualitzar i eliminar un comentari mitjançant el seu ID
router.route('/:id')
    .get(encontrarComentario)  // Obtenir un comentari específic per ID
    .put(actualizarComentario) // Actualitzar un comentari específic per ID
    .delete(eliminarComentario); // Eliminar un comentari específic per ID

export default router;
