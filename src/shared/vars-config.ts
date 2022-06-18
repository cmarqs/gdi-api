export const DATA_SOURCES = {
    mySqlDataSource: {
      DB_USER: process.env.DATABASE_USER,
      DB_PASSWORD: process.env.DATABASE_PASS,
      DB_DATABASE: process.env.DATABASE_NAME,
      DB_HOST: process.env.DATABASE_HOST,
      DB_PORT: process.env.DATABASE_PORT,
      DB_CONNECTION_LIMIT: process.env.DATABASE_CONNECTION_LIMIT ? parseInt(process.env.DATABASE_CONNECTION_LIMIT) : 4,
    }
  };