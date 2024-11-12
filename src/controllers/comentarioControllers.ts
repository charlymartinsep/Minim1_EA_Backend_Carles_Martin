import { Request, Response } from 'express';
import * as comentariosServices from  '../services/comentariosServices'
import { ComentariosInterface } from '../modelos/type_d_comentarios';


export async function encontrarTodosLosComentarios(_req: Request, res: Response): Promise<Response> {
    try {
        const comentarios: ComentariosInterface[] | null = await comentariosServices.getEntries.getAll();
        return res.json(comentarios);
    } catch (e) {
        return res.status(500).json({ e: 'Error al encontrar todos los comentarios' });
    }
}

export async function encontrarComentario(req: Request, res: Response): Promise<Response> {
    try {
        const comentario: ComentariosInterface | null = await comentariosServices.getEntries.findById(req.params.id);
        return res.json(comentario);
    } catch (e) {
        return res.status(500).json({ e: 'Error al encontrar el comentario' });
    }
}

export async function crearComentario(req: Request, res: Response): Promise<Response> {
    try {
        const comentario: ComentariosInterface | null = await comentariosServices.getEntries.create(req.body as object);
        return res.status(200).json(comentario);
    } catch (e) {
        return res.status(500).json({ e: 'Error al crear el comentario' });
    }
}

export async function actualizarComentario(req: Request, res: Response): Promise<Response> {
    try {
        const comentario: ComentariosInterface | null = await comentariosServices.getEntries.update(req.params.id, req.body as object);
        return res.status(200).json(comentario);
    } catch (e) {
        return res.status(500).json({ e: 'Error al actualizar el comentario' });
    }
}

export async function eliminarComentario(req: Request, res: Response): Promise<Response> {
    try {
        const comentario: ComentariosInterface | null = await comentariosServices.getEntries.delete(req.params.id);
        return res.json(comentario);
    } catch (e) {
        return res.status(500).json({ e: 'Error al eliminar el comentario' });
    }
}
