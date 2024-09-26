import userService from "../services/user.mjs";

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userService.search({
        email: email,
        password: password
    });
    console.log(user)
    if (user.length === 0) {
        res.status(401).json({ message: 'Credenciales invalidas' });
        return;
    }
    const userData = {
        id: user[0].id,
        name: user[0].name,
        email: user[0].email
    }

    req.session.user = userData;
    
    res.json({ message: 'Login successful', user: userData });
}