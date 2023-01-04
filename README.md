# MERN-Final-Project (Misr El Kheir)
This is a MERN stack based web project. This is a project for the charity non-profit organization Misr el kheir.

# Overview on the project

This is a MERN based project that implements various functions to make use of all MERN capabilites.

The client-side of this project uses react for the front-end and tailwind css for the styling

The server-side uses express for the routing, mongodb for handling the database solution, and ( bcrypt, jsonwebtoken, validator ) packages for handling the signup/Login and user sessions.


# Getting started with the project

After downloading the project files, you should navigate to the client and server directories and run the following command to download all the required dependecies to run the project:

### `npm i`


Then you should open the `.env` file inside the server directory and add your mongoDB connection link like following:

 `MONGO_UI= mongodb+srv://<username>:<password>@mernapp.ad5fpaw.mongodb.net/?retryWrites=true&w=majority`
 
Finally navigate to both the client and server directories and run this command to start the react server and the express server:

`npm run start`
