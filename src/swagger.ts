import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "task",
      version: "1.0.0",
      description: "task",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],

    tags: [
      {
        name: "Users",
        description: "Operations related to user CRUD",
      },
      
    ],
  },
  apis: ["./src/routes/*.ts"], // Update the path based on your folder structure
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
