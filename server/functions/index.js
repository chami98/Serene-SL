const functions = require('firebase-functions');
const app = require('./App');

// Enable CORS Middleware
const cors = require('cors')({ origin: true });

exports.SereneSL = functions.https.onRequest((req, res) => {
    // Run the CORS middleware
    cors(req, res, () => {
        app(req, res);
    });
});
