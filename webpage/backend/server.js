const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Definir rutas
app.use('/api/auth', require('./routes/Auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
