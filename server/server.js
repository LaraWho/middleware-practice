const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const cors = require('cors')
const cntrl = require('./middlewares/filter');

const app = express();
app.use(cors())
app.use( bodyParser.json() );

app.use(cntrl.filterStuff);

app.post('/api/newPost', cntrl.changeHoliday, cntrl.textPusher);

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );