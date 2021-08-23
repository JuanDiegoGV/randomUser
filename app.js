const express = require('express')
const fetch = require('node-fetch')
const morgan = require('morgan')

const app = express()

const port = 3001
app.listen(port, () => console.log("listen on port", port))

app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', async (req, res) => {
    const query = await fetch('https://randomuser.me/api/')
        .then(response => response.json())

        console.log(query);

        const user = query.results[0]
        console.log(user);
    res.render('users', {user})

})