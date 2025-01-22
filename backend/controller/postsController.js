const { posts, users } = require("../model");

const getAllPosts = async (req, res) => {
    try {
        const response = await posts.findAll({
            include: users
        });

        return res.status(200).json(response);
    }
    catch (err) {
        s
        console.log(err)
        return res.status(500).json(err);

    }
}

const getPostsById = async (req, res) => {
    try {
        const response = await posts.findByPk(req.params.id, {
            include: users
        });

        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
}

const createPosts = async (req, res) => {
    try {
        const response = await posts.create(req.body);

        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
}

const updatePosts = async (req, res) => {
    try {
        const response = await posts.update(req.body, {
            where: { id: req.params.id }
        });

        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
}

const deletePosts = async (req, res) => {
    try {
        const response = await posts.destroy({
            where: { id: req.params.id }
        });

        return res.status(200).json({ message: "deletion completed." });
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
}

module.exports = {
    getAllPosts,
    getPostsById,
    createPosts,
    updatePosts,
    deletePosts
}