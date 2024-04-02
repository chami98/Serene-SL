const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const serviceAccount = require('./serviceAccountKey.json');
const app = express();
app.use(bodyParser.json());

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Signup endpoint
app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Create user with email and password
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password
        });

        // User created successfully
        res.status(201).json({ message: 'User signed up successfully', uid: userRecord.uid });
    } catch (error) {
        // Error handling
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to signup user' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
