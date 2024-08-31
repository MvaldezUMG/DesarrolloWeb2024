import User from '../models/user.mjs';
const getAll = async () => {
    return await User.findAll();
}

const getById = async (id) => {
    return await User.findByPk(id);
}

const create = async (user) => {
    return await User.create(user);
}

const update = async (id, user) => {
    return await User.update(user, {
        where: {
            id
        }
    });
}

const remove = async (id) => {
    return await User.destroy({
        where: {
            id
        }
    });
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}