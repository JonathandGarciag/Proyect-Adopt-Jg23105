import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    correo: {
        type: String,
        required: [true, "El correo es requerido"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "El correo es requerido"],
    },
    img: {
        type: String,
    },
    phone: {
        type: String,
        minLenght: 8,
        maxLenght: 8,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"],
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    }
});

userSchema.methods.toJSON = function (){
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

export default mongoose.model('User', userSchema);