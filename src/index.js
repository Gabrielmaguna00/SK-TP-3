const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT =  3000;
const v1UsersRoute = require('./v1/routes/users');


app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/users', v1UsersRoute);


app.listen(PORT, () => {
	console.log(`Servidor escuchando en ${PORT}`)
});