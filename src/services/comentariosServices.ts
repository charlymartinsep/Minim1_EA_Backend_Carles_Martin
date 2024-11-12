import { ComentariosInterface, comentariossofDB } from '../modelos/type_d_comentarios';

//import userData from './users.json'

export const getEntries = {

    // Llistar tots els comentaris
    // Aquesta funció retorna tots els comentaris de la base de dades
    getAll: async() => {
        return await comentariossofDB.find();
    },

    // Trobar un comentari per ID
    // Aquesta funció retorna un comentari específic buscant-lo per l'ID
    findById: async(id: string): Promise<ComentariosInterface | null> => {
        return await comentariossofDB.findById(id);
    },

    // Crear un comentari
    // Aquesta funció crea un comentari nou a la base de dades
    create: async(entry: object): Promise<ComentariosInterface> => {
        return await comentariossofDB.create(entry);
    },

    // Actualitzar un comentari per ID
    // Aquesta funció actualitza un comentari existent a la base de dades 
    // amb la informació del cos de la sol·licitud
    update: async(id: string, body: object): Promise<ComentariosInterface | null> => {
        console.log(body);  // Imprimeix el cos de la sol·licitud per depurar
        return await comentariossofDB.findByIdAndUpdate(id, body, { $new: true });
    },

    // Eliminar un comentari per ID
    // Aquesta funció elimina un comentari existent a la base de dades
    delete: async(id: string): Promise<ComentariosInterface | null> => {
        return await comentariossofDB.findByIdAndDelete(id);
    }
}
