const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const cors = require('cors');


const app = express();
const PORT = 8800;
dotenv.config();

mongoose.set("strictQuery", false);

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("DB is running");
    } catch (err) {
      throw err;
    }
};
  
mongoose.connection.on("disconnect", () => {
    console.log("DB is disconnected");
});
  
app.use(cors());
app.use(express.json());
app.use('/api/user', userRoute)
app.listen(PORT, ()=>{
    connect();
    console.log(`listening on ${PORT}`);
})