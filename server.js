const express = require('express')
const app = express()
const path = require('path');
const PORT = 5555

app.listen(PORT, function () {
    console.log("Server started on port " + PORT)
})

app.get('/', function (req, res) {
    console.log('index');
    return res.sendFile(path.join(__dirname, 'Pages', 'index.html'));
})

app.get('/download/resume/AmirulAsraf', function (req, res) {
    console.log('download resume')
    //later count here how many download
    return res.sendFile(path.join(__dirname, 'Resume', 'AmirulAsraf.pdf'))
})

app.use('/bootstrap/', express.static(path.join(__dirname, 'node_modules', 'bootstrap')))

app.use('/',
    function (req, res, next) {
        res.setHeader('Cache-Control', `max-age=31536000, no-cache`);
        next();
    }
    , express.static('Pages'));