import { model, Schema, Types } from 'mongoose';

const fileSchema = new Schema({
  userid: Types.ObjectId,
  fileName: String,
  originalName: String,
  fileIcon: {
    type: String,
    enum: ['image', 'video_file', 'description']
  },
}, {
  timestamps: true
});

const File = model('file', fileSchema);

export default File;