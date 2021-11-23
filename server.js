const app = require('./src/config/app/app');
const connectDB = require('./src/config/db/connection');

connectDB()
    .then(() => console.log('DB started.'))
    .then(() => app.listen(process.env.PORT || 3000, () => console.log('Server started.')))
    .catch(console.error);