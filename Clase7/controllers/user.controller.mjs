import userService  from '../services/user.mjs';

export const getAll  = async (req, res) => {
    const users = await userService.getAll();
    res.json(users);
}

export const create = async (req, res) => {
    const user = req.body;
    const newUser = await userService.create(user);
    res.json(newUser);
}

export const getById = async (req, res) => {
    const id = req.params.id;
    const user = await userService.getById(id);
    res.json(user);
}

export const update = async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    await userService.update(id, user);
    res.json({success: true});
}

export const remove = async (req, res) => {
    const id = req.params.id;
    await userService.remove(id);
    res.json({success: true});
}
