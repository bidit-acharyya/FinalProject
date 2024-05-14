import express from 'express';
import sqlite3 from 'sqlite3'; 
import cors from 'cors'; 

const port = process.env.port || 5000;
const app = express();
app.use(cors());

const db: sqlite3.Database = new sqlite3.Database('./db/StudentInfo.db', err => {
    if (err) 
    {
        console.error(err.message);
    }
    console.log('Connected to the StudentInfo database.');
});



app.get('/api', (req, res) => {
    db.all('SELECT * FROM DemoData', (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message }); 
            console.error(err.message);
        }
        res.json(row);
    });
});


export const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

