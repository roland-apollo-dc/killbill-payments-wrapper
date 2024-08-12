// // app.js
// import express from 'express';
// const app = express();
// const routes = require('./routes.ts');

// app.use(express.json());
// app.use('/', routes);

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`
//   #########################################
//   Wrapper project for Apollo Billing Module\n
//   Fintech Team, Apollo Technologies 2024
//   Listening at port: ${port}
//   #########################################
//   `);
// });

// app.ts
import express from 'express';
import routes from './routes';
import 'dotenv/config'


const app = express();

app.use(express.json());
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  
  console.log(`
   #########################################
   Wrapper project for Apollo Billing Module\n
   Fintech Team, Apollo Technologies 2024
   
   solon.rolandkimandre@gmail.com

   Listening at port: ${port}
   Calling API through: ${process.env.API}
   #########################################
  `);
});