const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');

const cors = require('cors');

app.use(cors({
    origin : ['http://localhost:3000'],
}));

app.use(express.json());

//middleware
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Working Perfectly');
});

app.get('/add', (req, res) => {
    res.send('Response from add');
});

app.get('/getall', (req, res) => {
    res.send('Response from getall');
});

// getall
// update

app.listen( port, () => { console.log('server started'); } );