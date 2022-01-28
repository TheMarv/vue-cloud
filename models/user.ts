import { model, Schema, Types } from 'mongoose';

export interface iUser {
  _id: Types.ObjectId
  username: string
  email: string
  password: string
}

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  space: {
    type: Number,
    default: 1000
  }
}, {
  timestamps: true
});

const User = model('user', userSchema);

export default User;