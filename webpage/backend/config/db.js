const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://triping:triping@clustertriping.6hfroz7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTriping');
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
