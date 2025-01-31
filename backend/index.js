const express = require("express")

const port = process.env.PORT || 3000;
const app = express();

var ImageKit = require("imagekit");

const cors = require("cors");

// taken from the imagekit.io instructions page
const imagekit = new ImageKit({
    publicKey : process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey : process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGE_KIT_ENDPOINT
});

app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.get("/api/upload/", (req,res) =>{
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.get("/", (req, res) => {
    res.send("Hello New World")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// SDK initialization

