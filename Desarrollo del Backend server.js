// backend/server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const SECRET_KEY = "SecureNode_2026_Key";

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "12345") {
        const token = jwt.sign({ user: username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ message: "Login exitoso", token });
    }
    res.status(401).json({ message: "Credenciales inválidas" });
});
