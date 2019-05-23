To run the server in watch mode, execute:
`npm install` and `npm run watch`

Run `mongodb` in docker container.
`docker run -p 27017:27017 --name local-mongo -v /data/mongo/db:/data/db -d mongo`

And to access it via mongo client to inspect data,
`docker exec -it local-mongo bash`