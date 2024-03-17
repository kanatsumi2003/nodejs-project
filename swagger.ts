// generateSwagger.js
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json'; // Output file for generated Swagger documentation
const endpointFiles = ['./app.ts']; // Path to your route files

const options = {
  info: {
    title: 'Your API Documentation',
    description: 'API documentation generated using swagger-autogen',
    version: '1.0.0',
  },
  host: 'localhost:3000', // Update with your server host
  basePath: '/', // Update with your API base path
  schemes: ['http'], // Add 'https' if your API uses HTTPS
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          username: { type: 'string', example: 'exampleUsername' },
          email: { type: 'string', example: 'example@example.com' },
          // Add more properties as needed
        },
      },
    },
  },
};

swaggerAutogen(outputFile, endpointFiles, options);
