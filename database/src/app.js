import express from 'express';
import knex from 'knex';
import knexfile from '../database/knexfile.js';
const router = express.Router();

export const app = express();
const myknex = knex(knexfile.development);
app.use(express.json());


app.get('/', (req, res, next) => { 
    res.send(200).send('MFIT for life')
    next()
})

app.get('/member/:id', (req, res, next) => {
    const { id } = req.params;
    res.send(id)
    next()
})

app.get('/member-info', function(req, res){
   knex
     .select('*')
     .from('member_info')
     .then(data => res.status(200).json(data))
     .catch(err => {
        res.status(404).json({err, 
            message:
              'data cannot be found!!'
        })
     });
})

app.post('/login', (req, res) => {
    const { username } = req.body;
    res.send(`Welcome: ${username}`);
})

module.exports = app