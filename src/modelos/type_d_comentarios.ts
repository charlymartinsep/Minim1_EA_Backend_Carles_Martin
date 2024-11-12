import { ObjectId, model, Schema } from "mongoose";

export interface ComentariosInterface {
    texto: string;
    autor: ObjectId[]; // Array de referències a objectes del tipo "user"
    fecha: Date;
}

export const comentariosSchema = new Schema<ComentariosInterface>({
    texto: { type: String, required: true },
    autor: [{ type: Schema.Types.ObjectId, ref: 'user' }], // Relació amb el model "user"
    fecha: { type: Date, default: Date.now }
});

export const comentariossofDB = model<ComentariosInterface>('comentario', comentariosSchema);