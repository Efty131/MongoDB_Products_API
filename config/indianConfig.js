// config/indianConfig.js
// const mongoose = require('mongoose');

// const connectIndianDB = async () => {
//     try {
//         const indianConnection = await mongoose.createConnection(process.env.INDIAN_DB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log(`Connected to IndianData database!`.italic.yellow.underline);
//         return indianConnection;
//     } catch (error) {
//         console.error('Error connecting to IndianData database', error);
//         process.exit(1);
//     }
// };

// module.exports = connectIndianDB;