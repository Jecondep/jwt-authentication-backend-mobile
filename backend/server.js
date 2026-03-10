const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

app.use(express.json());

const SECRET_KEY = "SecureNode_2026_Key";

// A. Endpoint de Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    // Credenciales de prueba
    if (username === "admin" && password === "12345") {
        const token = jwt.sign({ user: username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ 
            message: "Login exitoso", 
            token: token 
        });
    }
    res.status(401).json({ message: "Usuario o contraseña incorrectos" });
});

// B & C. Middleware de Validación y Endpoint Protegido
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(403).json({ message: "Token requerido" });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Token inválido" });
        req.user = decoded;
        next();
    });
};

app.get('/api/dashboard', verifyToken, (req, res) => {
    res.json({ 
        message: "Bienvenido al área segura", 
        user: req.user.user,
        data: "Datos confidenciales de SecureNode Solutions"
    });
});

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
