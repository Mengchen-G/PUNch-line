import mongoose from 'mongoose';

const testSchema = mongoose.Schema({
    title: String,
    message: String,

});

const Test = mongoose.model('Test', testSchema);

export default Test;