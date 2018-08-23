const path = require('path');

module.exports = app => {
    app.all('/*', (req, res) => {
        res.sendFile(path.resolve('public/esus-report/index.html'));
    });
};