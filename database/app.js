const express = require('express');
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);

app.get('/', (req, res) => {
    res.send('MFIT for life')
})

app.get('/login', (req, res) => {
    res.send('You\'re now logged in');
})

// app.get('/branch', function(req, res){
//    knex
//      .select('*')
//      .from('table_name???')
//      .then(data => res.status(200).json(data))
//      .catch(err => {
//         res.status(404).json({err, 
//             message:
//               'data cannot be found!!'
//         })
//      });
// })

module.exports = app