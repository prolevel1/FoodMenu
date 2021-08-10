const express =require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const routeApp = require('./router/Item');
app.use('/item', routeApp);
// app.get('/', (req,res) => {
//     res.send('a new response');
// });


// mongoose.connect('mongodb+srv://user1:FgfSYs7wZSlqvALd@cluster0.kcokf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//     { useNewUrlParser: true , useUnifiedTopology: true },
//       () =>
//      console.log('connected ')
// );
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true }, () => 
  console.log('connected ')
);

app.listen(3000);