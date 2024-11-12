import mongoose from 'mongoose';

// Conexión a la base de datos de MongoDB
const connectionString = 'mongodb://localhost:27017/Prueba_1';

mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected!!');
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });

// Esquema para el Usuario (Modelo Referenciado)
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    comment: { type: String, required: true },
});

// Modelo de Usuario
const User = mongoose.model('User', userSchema);

// Esquema para el Comentario
const comentarioSchema = new mongoose.Schema({
    texto: { type: String, required: true },  // Texto del comentario
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Referencia al Usuario (Autor del comentario)
    fecha: { type: Date, default: Date.now },  // Fecha del comentario
});

// Modelo de Comentario
const Comentario = mongoose.model('Comentario', comentarioSchema);

// Función para Crear un Comentario
const crearComentario = async () => {
    try {
        // Primero, creamos un usuario (puedes omitir esto si ya tienes un usuario en tu base de datos)
        const user = new User({
            name: 'Juan Pérez',
            mail: 'juan.perez@ejemplo.com',
            password: '12345',
            comment: 'Este es un comentario de prueba.',
        });

        // Guardamos el usuario
        const savedUser = await user.save();
        
        // Luego, creamos un comentario asociado a este usuario
        const comentario = new Comentario({
            texto: 'Este es un comentario sobre el producto.',
            autor: savedUser._id,  // Usamos el _id del usuario recién creado
        });

        // Guardamos el comentario
        const savedComentario = await comentario.save();
        console.log('Comentario creado:', savedComentario);

    } catch (error) {
        console.error('Error al crear el comentario:', error);
    }
};

// Función para Obtener Todos los Comentarios
const obtenerComentarios = async () => {
    try {
        const comentarios = await Comentario.find({}).populate('autor');  // Populate llena los detalles del autor
        console.log('Comentarios encontrados:', comentarios);
        mongoose.connection.close();  // Cerramos la conexión después de obtener los datos
    } catch (error) {
        console.error('Error al obtener comentarios:', error);
    }
};

// Llamadas a las funciones para crear y obtener comentarios (puedes llamar a estas funciones donde lo necesites)
crearComentario();  // Llamada para crear un comentario
obtenerComentarios();  // Llamada para obtener todos los comentarios
