
const express = require('express')
require('colour');
const app = express()
const connectDB = require('./config/config');
const cors = require('cors');
require('dotenv').config();
const Product = require('./model/model');
const router = require('./Routes/route');
const port = process.env.PORT || 3000;

// mongodb connection
connectDB();

// Use CORS middleware
app.use(cors())

// Middleware to parse incoming request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/routes", router);

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/./views/upload.html')
});

app.get('/indian', (req, res) =>{
  res.sendFile(__dirname + '/./views/indianUpload.html')
});

app.post('/upload', async (req, res) => {
    try {
        const name = req.body.name;
        const description = req.body.description;
        const imageUrl = req.body.image; // Assuming the URL is provided in the form
    
        if (!name || !description || !imageUrl) {
          return res.status(400).json({ message: 'Please fill in all required fields' });
        }
    
        const newProduct = new Product({
          name,
          description,
          image: imageUrl
        });
    
        await newProduct.save();
    
        res.json({ message: 'Product uploaded successfully!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading product' });
      }
});

app.listen(port, () => {  
  console.log(`Server is running at http://127.0.0.1:${port}`.rainbow);
});
