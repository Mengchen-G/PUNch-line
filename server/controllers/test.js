import Test from '../models/testSchema.js';

export const getTests = async (req, res) => {
    try {
        const test = await Test.find();
        res.status(200).json(test);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const postTest =  async (req, res) => {
    const post = req.body;
    const newPost = new Test(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({message: error.message});
    }

}