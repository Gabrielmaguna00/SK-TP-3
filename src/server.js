const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const v1UsersRoute = require('./v1/routes/users');
const v1PostsRoute = require('./v1/routes/posts');
const v1CategoriesRoute = require('./v1/routes/categories');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'));


app.use('/api/v1/users', v1UsersRoute);
app.use('/api/v1/posts', v1PostsRoute);
app.use('/api/v1/categories', v1CategoriesRoute);

app.listen(PORT, () => {
	console.log(`Servidor escuchando en ${PORT}`)
});