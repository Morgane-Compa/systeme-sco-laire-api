import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import path from 'path';

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Système Scolaire',
            version: '1.0.0',
            description: 'Espace de travail numérique pour les écoles primaires en France facilitant la communication entre les parents et les enseignants / Digital workspace for primary schools in France to facilitate communication between parents and teachers',
        },
        components: {
            schemas: {
                School: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        location: { type: 'string' },
                    },
                },
                SchoolInput: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        location: { type: 'string' },
                    },
                    required: ['name', 'location'],
                },
                Classroom: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        capacity: { type: 'integer' },
                    },
                },
                ClassroomInput: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        capacity: { type: 'integer' },
                    },
                    required: ['name', 'capacity'],
                },
                UserImage: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        url: { type: 'string' },
                        userId: { type: 'string' },
                    },
                },
                UserImageInput: {
                    type: 'object',
                    properties: {
                        url: { type: 'string' },
                        userId: { type: 'string' },
                    },
                    required: ['url', 'userId'],
                },
                User: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        email: { type: 'string' },
                    },
                },
            },
        },
    },
    apis: [path.resolve(__dirname, './routes/*.ts')],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default (app: express.Application) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
