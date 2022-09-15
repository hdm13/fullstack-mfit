import {app} from './app.js'
const port = 8080;

app.listen(port, () => {
    console.log(`express and knex running at port: ${port}`);
});