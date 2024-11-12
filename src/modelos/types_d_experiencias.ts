import { ObjectId, model, Schema } from "mongoose";

export interface experienciasInterface {
    owner: ObjectId; 
    participants: ObjectId[]; 
    description: string;
    tipo: string;
    comentarios: ObjectId[]; // Array de referències a comentaris
}

export const experienciasSchema = new Schema<experienciasInterface>({
    owner: { type: Schema.Types.ObjectId, ref: 'user' }, 
    participants: [{ type: Schema.Types.ObjectId, ref: 'user' }], 
    description: { type: String, required: true },
    tipo: { type: String, required: true },
    comentarios: [{ type: Schema.Types.ObjectId, ref: 'comentario' }] // Relació amb el model comentaris
});

export const experienciasofDB = model<experienciasInterface>('experiencias', experienciasSchema);
