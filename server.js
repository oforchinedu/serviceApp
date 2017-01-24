const express = require('express');
const app = express();

const pathName = __dirname + '/public'

app.use(express.static('public'));

app.listen(4000, function() {
  console.log('listening on 4000')
})


