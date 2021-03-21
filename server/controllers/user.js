import User from '../models/userSchema.js';

export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({"UserName" : req.params.UserName});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateUser =  async (req, res) => {
    let data = req.body;

    try {
        const user = await User.findOne({"UserName" : req.params.UserName});
        if (user === null) {
            const newPost = new User({"UserName" : data.UserName});
            await newPost.save();
        }
        if (data.FavoriteJoke !== '') {
            await User.updateOne({"UserName" : req.params.UserName},
                                                    {$push: {"FavoriteJokes": data.FavoriteJoke}},
                                                    );
        }
        if (data.MyJoke !== '') {
                    await User.updateOne({"UserName" : req.params.UserName},
                                                            {$push: {"MyJokes": data.MyJoke}},
                                                            );
                }

        res.status(201).json({});
    } catch (error) {
        res.status(409).json({message: error.message});
    }

}

//http://localhost:3000/user/Ada
// post body
//{
//    "UserName": "Ada",
//    "MyJoke": {
//        "setup": "I was gonna tell you a joke about UDP...",
//        "punchline": "...but you might not get it."},
//    "FavoriteJoke" :""
//
//}