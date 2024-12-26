/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(config.database_url);

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port} 🏃‍♀️‍➡️ `);
    });
  } catch (error) {
    console.error(error);
  }
}

server();
