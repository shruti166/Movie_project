const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello From Scaler Academy')
})

app.get('/about', (req, res) => {
    res.send('I am the about page')
})

app.listen(8000, () => {
    console.log(`server listening on port 8000`)
})

// Courses

const courses = [
    {id:1, }
]

