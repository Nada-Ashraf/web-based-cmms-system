const dotenv = require("dotenv");

dotenv.config();

// export default {
//   JWT_SECRET: process.env.JWT_SECRET,
// };

module.exports = { JWT_SECRET: process.env.JWT_SECRET };
