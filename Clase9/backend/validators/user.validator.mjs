import {body} from 'express-validator';

export const userValidator = {
    create: [
        body('name').isString().isLength({min: 3}),
        body('email').isEmail(),
        body('password').isString().isLength({min: 6})
    ],
    update: [
        body('name').isString().isLength({min: 3}),
        body('email').isEmail(),
        body('password').isString().isLength({min: 6})
    ]
}