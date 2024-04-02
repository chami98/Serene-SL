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
        let { name, email, password, country, hospitalName, location } = req.body;
        let accountType;

        // Check if accountType is provided in query parameter
        if (!req.query.accountType) {
            console.log('Missing accountType query parameter');
            return res.status(400).json({ error: 'Missing accountType query parameter' });
        }

        // Trim whitespace characters from accountType value
        accountType = req.query.accountType.trim();

        if (accountType !== 'tourist' && accountType !== 'hospital') {
            console.log('Invalid accountType query parameter');
            return res.status(400).json({ error: 'Invalid accountType query parameter. It must be either "tourist" or "hospital"' });
        }

        // Ensure required fields for each account type
        if (accountType === 'tourist') {
            if (!name || !email || !password || !country) {
                return res.status(400).json({ error: 'Missing required fields for tourist account' });
            }
            // Remove hospital specific fields
            hospitalName = undefined;
            location = undefined;
        } else if (accountType === 'hospital') {
            if (!hospitalName || !email || !password || !location) {
                return res.status(400).json({ error: 'Missing required fields for hospital account' });
            }
            // Remove tourist specific fields
            name = undefined;
            country = undefined;
        }

        // Create user with email and password
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
            displayName: accountType === 'hospital' ? hospitalName : name
        });

        // Create user data object
        const userData = {
            uid: userRecord.uid,
            email: email,
            accountType: accountType
        };

        // Add optional fields if they are defined
        if (name) userData.name = name;
        if (country) userData.country = country;
        if (hospitalName) userData.hospitalName = hospitalName;
        if (location) userData.location = location;

        // Save user details to database
        await admin.firestore().collection('users').doc(userRecord.uid).set(userData);

        // User created successfully
        res.status(201).json({ message: 'User signed up successfully', user: userData });
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
