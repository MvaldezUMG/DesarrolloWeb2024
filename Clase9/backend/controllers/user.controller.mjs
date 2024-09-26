import userService from '../services/user.mjs';
import bcrypt from 'bcrypt';

export const getAll = async (req, res) => {
    const users = await userService.getAll();
    res.json(users);
}

export const create = async (req, res) => {
    let newUser = null;
    try {
        const user = req.body;
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        newUser = await userService.create(user);
        res.json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        });
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500, err.message);
    }

}

export const getById = async (req, res) => {
    const id = req.params.id;
    const user = await userService.getById(id);
    const userData = {
        id: user.id,
        name: user.name,
        email: user.email
    }
    res.json(userData);
}

export const update = async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const dataToModify = {
        name: user.name,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    }
    await userService.update(id, dataToModify);
    res.json({ success: true });
}

export const remove = async (req, res) => {
    const id = req.params.id;
    await userService.remove(id);
    res.json({ success: true });
}
