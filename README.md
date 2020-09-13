# NodeJS Boilerplate with Express running on Docker

All node functionality exist inside of the container. 

## Reminders

1. Change Node versions in `.env`. Current default: `12`. 
2. Express runs on port `3000` and Browsersync runs on port `3001`. Docker exposes both to the host at the same port numbers. Change any port in `.env`. 
3. `node_modules` exists *inside* the node container as a Docker volume, not on the host (an empty directory *is* created on the host on container creation). Any manual Node installs must be run inside the `node` container. 
4. `NODE_ENV` options are `development` (defauit) or `production`. `development` runs `nodemon`. 