const express = require('express');
const app = express();
const user = require('./routes/usersRouter');
const post = require('./routes/postsRouter');

app.use(express.json());

app.use('/users', user);
app.use('/posts', post);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});