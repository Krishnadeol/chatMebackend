const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "POTION APP APIs",
    description: "Description",
  },
  host: "chatappbackup.onrender.com",
};

const outputFile = "./swagger-output.json";
const routes = ["./index.js"];

swaggerAutogen(outputFile, routes, doc);
