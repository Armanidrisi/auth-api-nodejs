## 🚀 Auth REST API in Node.js with MongoDB, Express.js, Mongoose, and Crypto

[![GitHub license](https://img.shields.io/github/license/Armanidrisi/auth-api-nodejs)](https://github.com/Armanidrisi/auth-api-nodejs/blob/master/LICENSE)

[![GitHub issues](https://img.shields.io/github/issues/Armanidrisi/auth-api-nodejs)](https://github.com/Armanidrisi/auth-api-nodejs/issues)

[![GitHub stars](https://img.shields.io/github/stars/Armanidrisi/auth-api-nodejs)](https://github.com/Armanidrisi/auth-api-nodejs/stargazers)

A simple authentication REST API built with Node.js, MongoDB, Express.js, Mongoose, and Crypto, using JWTs for authentication.

### 📝 About

This package provides a basic authentication REST API that allows users to sign up, log in, and access protected routes. The API uses JSON Web Tokens (JWTs) for authentication and stores user data in a MongoDB database using Mongoose.

### 🚀 Framework/Stack Used

[![Node.js](https://img.shields.io/badge/-Node.js-43853d?logo=Node.js&logoColor=white)](https://nodejs.org/)

[![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=MongoDB&logoColor=white)](https://www.mongodb.com/)

[![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=MongoDB&logoColor=white)](https://mongoosejs.com/)

[![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=Express&logoColor=white)](https://expressjs.com/)

[![JSON Web Tokens](https://img.shields.io/badge/-JSON%20Web%20Tokens-000000)](https://jwt.io/)

### 🛠️ How to Use

To use this package, you will need to have Node.js and MongoDB installed on your machine. Once you have cloned the repository, run the following command to install the dependencies:



```bash
npm install
```

Then, you can start the server by running:

```bash
node server.js
```

By default, the server will run on port 3000. You can change this by setting the `PORT` environment variable.

### 🛣️ Available Routes

- `POST /api/signup` - Create a new user account

- `POST /api/login` - Log in to an existing user account

- `GET /api/protected` - Access a protected route that requires authentication

### 👤 Author

This package was created by [Arman Idrisi](https://github.com/Armanidrisi).

### 📄 License

This package is licensed under the [MIT License](https://github.com/Armanidrisi/auth-api-nodejs/blob/master/LICENSE).

