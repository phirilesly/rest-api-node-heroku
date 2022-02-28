import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
export const connect = () => mongoose.connect('mongodb+srv://sky3oot:12345@cluster0.lm1hk.mongodb.net/bookDB?retryWrites=true&w=majority');