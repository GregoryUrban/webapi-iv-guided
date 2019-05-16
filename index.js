// it's recommended to load configuration for .env as early as possible
// require('dotenv').config(); // add this line as the first thing to run1
require('dotenv').config(); // add the library "yarn add dotenv", then add this as first line of code

const server = require('./api/server.js');

// we'll read the port from the server environment if it is there
// heroku will have the PORT environment variable set
// const PORT = 4000;
const PORT = process.env.PORT || 4000;


// we can now use that PORT, if set up by heroku or read from .env or 4000 as a default if not set
server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});