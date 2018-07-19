const Express = require('express');

const app = Express();

app.use(Express.static(__dirname + '/../client/dist'));

app.listen(8080, () => console.log('Serving that shit up bitch'));
