const PORT = 3000;
const app = require('./config/express');

app.listen(PORT, () => 
    console.log(`API e-SUS Report - porta ${PORT}`)
);