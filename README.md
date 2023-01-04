# MERN-Final-Project (Misr El Kheir)
This is a MERN stack based web project. This is for the charity non-profit organization Misr el kheir.

# Introduction

*Front End:* React, Tailwind css, axios

*Back End:* Express, Mongoose, validator, jsonwebtoken, Bcrypt, cors


## Problem statement

You will be creating a web app using the key technologies that we have practiced (MEAN or MERN
Stacks). Instead of giving you a specific web app to replicate, you are given the freedom to choose what
you’d like to make.

You will be working in a team of 5-7 members. Your project must meet the following criteria:

    All Team Members must have a clear contribution in the project
    Use MEAN or MERN Stacks to develop the web app:
    Use Angular or React to develop the Front-End of the app
    Use Node.js Express Framework to develop the Server of the app
    Use MongoDb as your backend Database
    Any Extra Work will be appreciated and considered in grading, here are some examples of extras
   you can add:
       Implement login and registration mechanisms
       Use the File System or MongoDb to store login information


## Overview of the solution

1. Building the backend for storing the data and CRUD operations for our website
2. Building front end with React, Tailwind, and Axios


# Important Folders and Files

```
+---client
|   |   package-lock.json
|   |   package.json
|   |   postcss.config.js
|   |   README.md
|   |   tailwind.config.js
|   |
|   +---public
|   |       index.html
|   |       manifest.json
|   |
|   \---src
|       |   App.js
|       |   index.css
|       |   index.js
|       |
|       +---components
|       |       footer.js
|       |       navbar.js
|       |       style.css
|       |
|       +---context
|       |       AuthContext.js
|       |       WorkoutContext.js
|       |
|       +---hooks
|       |       useAuthContext.js
|       |       useLogin.js
|       |       useLogout.js
|       |       useSignup.js
|       |
|       \---pages
|               BlogDetails.js
|               blogForm.js
|               BlogList.js
|               Blogs.js
|               Donate.js
|               HomePage.js
|               Login.js
|               NotFound.js
|               Signup.js
|               useFetch.js
|
\---server
    |   .env
    |   package-lock.json
    |   package.json
    |   server.js
    |
    +---controllers
    |       blogController.js
    |       userController.js
    |
    +---middleware
    |       requireAuth.js
    |
    +---models
    |       blogModel.js
    |       userModel.js
    |
    \---routes
            blogRoutes.js
            user.js
```

# Dependencies

## Back End
![image](https://user-images.githubusercontent.com/120793565/210652909-c2ebb943-2048-48f5-b35e-af2fd24fb287.png)

## Front End
![image](https://user-images.githubusercontent.com/120793565/210652982-313c09b3-2a32-4428-9c4c-9f558497c6cc.png)



# Installation

1. Install latest version of Node JS and Chrome
2. run these commands in a terminal in a new folder
3. `git clone https://github.com/Kaidasenpai/mern-final-project/ `
4. `cd client` -> `npm i` ( to download all needed dependecies )
5. `cd server` -> `npm i` 
6. edit the .env file in the server directory and add your mongodb connection string  like here 

   (` mongodb+srv://<username>:<password>@mernapp.ad5fpaw.mongodb.net/?retryWrites=true&w=majority `)

7. navigate to both server and client directories on separate terminals and run this command 

   (`npm run start`)

   so you can start both the express and react servers and use the application.


