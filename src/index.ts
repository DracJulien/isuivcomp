import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Configuration de Swagger
const swaggerOptions = {
   swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js API with Swagger and TypeScript',
      version: '1.0.0',
      description: 'API documentation for Node.js API with Swagger and TypeScript',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes


// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});


export default app;