import express from 'express';
import dbConnector from './infrastructure/dbConnector.orm.mjs';
import userRoute from './routes/user.route.mjs';
import authRoute from './routes/auth.route.mjs';
import session from 'express-session';

dbConnector.sync()

const app = express();
app.use(express.json());

app.use(session({
    secret: "mi super secreto",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    httpOnly: true
}))

//Enable static files
app.use(express.static('public'));

//User routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

// const interval = setInterval(() => {
//     console.log('I am alive');
// }, 5000)

//JSON Web Token