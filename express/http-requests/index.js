import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Hailey's page!</h1>");
});

app.get('/about', (req, res) => {
    res.send(" \
        <h1>About</h1> \
        <p>I'm learning node.js and express.js.</p> \
    ");
});

app.get('/contact', (req, res) => {
    res.send(" \
    <h1>Contact</h1> \
    <ul> \
        <li>Email: kfbkhw@gmail.com</li> \
        <li>Phone: 010-1234-5678</li> \
        <li>GitHub: <a href='https://github.com/kfbkhw' target='_blank'>Hailey's GitHub</a></li> \
    </ul> \
    ")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});