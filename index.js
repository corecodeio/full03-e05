const express = require('express');
const app = express();
const { server } = require('./src/config/config');

const categoryRoutes = require('./src/routes/category');
const invalidRoutes = require('./src/routes/404');

app.use(express.json());

app.use(categoryRoutes);
app.use(invalidRoutes);

app.listen(server.port, () => {
  console.log(`Server running on port: ${server.port}`);
});
