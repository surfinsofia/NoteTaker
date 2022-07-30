const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;

const apiRoute = require ('./routes/APIroute');
const htmlRoute = require ('./routes/HTMLroute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static ('./Develop/public'))

app.use('/api', apiRoute);
app.use('/', htmlRoute);


app.listen(PORT, () => {
    console.log(`API server is now on ${PORT}`)
});
