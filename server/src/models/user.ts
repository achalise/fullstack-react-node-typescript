import mongoose, {Schema, Document} from 'mongoose'

export interface IUser extends Document {
    googleId: string;
}

const userSchema = new Schema({
    googleId: String
});

export const User = mongoose.model<IUser>('users', userSchema);
