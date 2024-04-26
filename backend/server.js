const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 8000;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to the support ticket API"});
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));