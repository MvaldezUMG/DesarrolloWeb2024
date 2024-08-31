import express from 'express';

const app = express();
//Parse json automatically
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get("/hello/:name", (req, res) => {
    let name = req.params.name;
    res.send("Hello World! " + name);
})

app.get("/another", (req, res) => {
    const {name, another_data} = req.query;
    res.send("Another route" + name + " " + another_data);
})

app.post("/save", (req, res) => {
    const {name, another_data} = req.body;
    res.send("Save route" + name + " " + another_data);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})