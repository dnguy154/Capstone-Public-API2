//Import express and axios
import express from "express";
import axios from "axios";

//Create an express app and set the port number.
const app = express();
const port = 3000;

//Use the public folder for static files.
app.use(express.static("public"));

// Use axios to get a random joke and pass it to index.ejs to display the joke
app.get("/", async (req, res) => {
    try {
      const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
      const setup = response.data.setup;
      const delivery = response.data.delivery;
      console.log(setup);
      console.log(delivery);
      res.render("index.ejs", { setup: setup, delivery: delivery});
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });


//Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
  
