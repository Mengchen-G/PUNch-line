import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    UserName: String,
    FavoriteJokes: [{
        setup: String,
        punchline: String}],
    MyJokes: [{
        setup: String,
        punchline: String}]
});

const User = mongoose.model('User', userSchema);

export default User;