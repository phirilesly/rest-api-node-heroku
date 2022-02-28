import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Book must have title'],
  },
  description: {
    type: String,
    required: [true, 'Book must have a description'],
  },
  author: {
    type: String,
    required: [true, 'Book must have author name'],
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
});
bookSchema.plugin(mongoosePaginate);
export default mongoose.model('Book', bookSchema);