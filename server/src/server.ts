import express from 'express';


const app = express();

app.get('/api', (req, res) => {
    res.json({ "message": 'hello from server!' });
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

