# MERN Stack Authentication

👉 This repository provides a concise implementation of user authentication using the MERN stack (MongoDB, Express.js, React, and Node.js).

## Live Demo

hosted : upcoming

## 🌐 Features

👉 User registration with email and password.  
👉 User login with email and password.  
👉 JSON Web Token (JWT) generation and verification
Protected routes that require authentication.  
👉 Logout functionality

## 🖥️ Technologies Used

🚀 **MongoDB**: A NoSQL database for storing user data.
🚀 **Express.js**: A web application framework for building server-side APIs.  
🚀 **React**: A JavaScript library for building user interfaces.  
🚀 **Node.js**: A JavaScript runtime for running server-side code.  
🚀 **Bcrypt.js**: A library for hashing and salting passwords.  
🚀 **Jsonwebtoken**: A library for generating and verifying JSON Web Tokens.

⚙️ **Setup Instructions
Clone the repository:**

bash
Copy code
git clone https://github.com/anujnainwal/authentication.git

Install dependencies:

bash
Copy code
cd mern-stack-authentication
npm install
Configure the environment variables:

Rename the .env.example file to .env.
Modify the .env file and update the necessary variables such as database connection URL and JWT secret key.
Run the application:

bash
Copy code
npm start
Open your web browser and access the application at http://localhost:3000.

### Usage

Visit the registration page and create a new account.
Once registered, navigate to the login page and enter your credentials.  
After successful login, you will be redirected to the protected dashboard page.  
Explore the application and access the protected routes.  
To log out, simply click the "Logout" button.
Contributing  
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to create a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

This project was inspired by the need for a simple and secure user authentication implementation using the MERN stack. Special thanks to the open-source community for providing the necessary tools and resources to build this solution.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_PRODUCTION`:  
 `MONGO_URL`: your database url
`PORT`: your port
`ACCESS_TOKEN`: your secret key  
 `ACCESS_TOKEN_EXPIRY`: your expire key
`REFRESH_TOKEN_EXPIRY`: your expire key  
 `NODE_USER`: your gmail address  
 `NODE_PASS`: password  
 `HOST`: gmail.com  
 `SERVICE`: gmail.com  
 `MAIL_PORT`: 587
