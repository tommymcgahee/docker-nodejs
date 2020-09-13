// server.js
const express = require("express");
const browserSync = require('browser-sync');
const port = process.env.NODE_PORT || 3000; 
const browserSyncPort = process.env.NODE_BROWSERSYNC_PORT || 3001; 
const app = express();

const isProduction = 'production' === process.env.NODE_ENV;

app.set('etag', isProduction);
app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });

// static example, add real routes here instead
app.use('/', express.static('public/', { etag: isProduction, lastModified: false }));

app.listen(port, listening);

function listening () {
    console.log(`Server available at http://localhost:${port}`);
    if(!isProduction) {
        browserSync({
            files: ['public/**/*.{html,js,css}'],
            online: false,
            open: false,
            port: browserSyncPort,
            proxy: 'localhost:' + port,
            ui: false
        });
    }
}