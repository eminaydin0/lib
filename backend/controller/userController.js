const { users, posts } = require("../model");

const getAllUsers = async (req, res) => {
    try {
        const response = await users.findAll({
            include: posts
        });

        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
}

const getUserById = async (req, res) => {
    try {
        const response = await users.findByPk(req.params.id, {
            include: posts
        });

        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
}

const createUser = async (req, res) => {
    try {
        const response = await users.create(req.body);

        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
}

const updateUser = async (req, res) => {
    try {
        const response = await users.update(req.body, {
            where: { id: req.params.id }
        });

        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
}

const deleteUser = async (req, res) => {
    try {
        const response = await users.destroy({
            where: { id: req.params.id }
        });

        return res.status(200).json({ message: "deletion completed" });
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}