//use for auth middleware if using firebase

// const verify = require("../../config/firebase-config");

// class TokenScanner {
//   async decodeToken(req, res, next) {
//     try {
//       if (verify.auth().verifyIdToken(req.headers.tok)) {
//         return next();
//       }
//     } catch (err) {
//       return res.json({ message: "unauthorized" });
//     }
//   }
// }

// module.exports = new TokenScanner();
