import User from '../models/user.mjs';
const getAll = async () => {
    return await User.findAll({
        attributes: {
            exclude: ['password']
        }
    });
}

const getById = async (id) => {
    return await User.findByPk(id, {
        attributes: {
            exclude: ['password']
        }
    });
}

const search = async (query) => {
    return await User.findAll({where : query}, {
        attributes: {
            exclude: ['password']
        }
    });
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
    remove,
    search
}