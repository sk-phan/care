import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    name: string;
    passwordHash: string;
    authSource: 'self' | 'google';
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    name: { required: true, type: String },
    passwordHash: { type: String, required: true },
    authSource: { type: String, enum: ['self', 'google'], default: 'self' },
});

userSchema.set('toJSON', {
    transform: (_document: mongoose.Document, returnedObject: { [key: string]: any }) => {
        returnedObject.id = returnedObject._id.toString();

        delete returnedObject._id;
        delete returnedObject.__v;

        // the passwordHash should not be revealed
        delete returnedObject.passwordHash;
    }
})

const User = mongoose.model<IUser>('User', userSchema)

export default User;