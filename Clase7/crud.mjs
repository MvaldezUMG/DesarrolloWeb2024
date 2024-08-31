import express from 'express';
import dbConnector from './infrastructure/dbConnector.orm.mjs';
import userRoute from './routes/user.route.mjs';
dbConnector.sync()

const app = express();
app.use(express.json());

//User routes
app.use('/users', userRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})