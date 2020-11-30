module.exports = {
    HOST: "35.242.231.16",
    USER: "postgres",
    PASSWORD: "12345",
    DB: "crud",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };