# Record Company API
- This API contains a collection of Music Albums handpicked from our personal favorites, this relational database is composed of 3 tables (artist, album, song)

## Schema Design
<img src="Isolated.png" alt="alt text" width="400"/>

## Instructions

### Server Setup:
- fork and clone this repo using git
- to install the back end service and dependencies, run `npm install` in the root of the `sdi-blended-workshop-databases-scaffold/` directory
- To start the server, run `npm start`
- The server will be available at `http://localhost:8080`

#### Available Service Endpoints

##### GET datasets 
- `GET artist` - returns a list of all artists
- `GET artist/:id` - returns details of a specific artist
- `GET album` - returns a list of all albums
- `GET album/:id` - returns details of a specific album
- `GET song` - returns a list of all songs
- `GET song/:id` - returns details of a specific song

##### POST datasets 
`POST artist` - must specify artist_name
`POST album` - must specify album_name && artist_id  
`POST song` - must specify song_name && artist_id && album_id

##### PATCH datasets 
`PATCH artist` - must specify artist_id && artist_name

##### DELETE datasets 
`DELETE song` - must specify song_id

## Helper
*Starting postgres*
- docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
    -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
-docker ps -a (shows all Docker images running)
-docker exec -it <PSQL-Container-ID> bash (navigate to container)
-psql -U postgres (login to psql shell as default postgres user)

 *SQL queries*
- SELECT song_name, artist_name FROM songs JOIN artist ON artist_id = artist.id;
- SELECT artist_name, album_name, song_name FROM artist JOIN album ON artist.id = artist_id JOIN songs ON album.id = album_id;
- -useful run commands-
- docker exec -it be3 bash //access database in terminal via docker
- npx knex seed:run
- npx knex migrate:rollback
- npx knex migrate:latest
- npx knex migrate:up
- npx knex seed:make
- dumb shit:  //await knex.schema.raw('TRUNCATE artist CASCADE')
- npm i dotenv 


