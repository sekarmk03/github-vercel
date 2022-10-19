const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: 'percobaan deploy ke vercel'
    });
});

app.use((req, res, next) => {
    return res.status(404).json({
        status: false,
        message: 'are you lost?',
        data: null
    });
});

app.use((err, req, res, next) => {
    return res.status(500).json({
        status: false,
        message: err.message,
        data: null
    });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));