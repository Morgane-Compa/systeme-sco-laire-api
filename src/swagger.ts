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
                        school_name: { type: 'string' },
                        street_name: { type: 'string' },
                        street_number: { type: 'integer' },
                        town_name: { type: 'string' },
                        postal_code: { type: 'integer' },
                        created_at: { type: 'Date' }
                    },
                },
                SchoolInput: {
                    type: 'object',
                    properties: {
                        school_name: { type: 'string' },
                        street_name: { type: 'string' },
                        street_number: { type: 'integer' },
                        town_name: { type: 'string' },
                        postal_code: { type: 'integer' },
                        created_at: { type: 'Date' }
                    },
                    required: ['school_name', 'street_name', 'street_number', 'town_name', 'postal_code', 'created_at'],
                },
                Classroom: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        classroom_name: { type: 'string' },
                        teacher: { type: 'integer' },
                        grade: { type: 'string' },
                        school_id: { type: 'integer' },
                        users: { type: 'User[]' },
                        created_at: { type: 'Date' },
                        updated_at: { type: 'Date' }
                    },
                },
                ClassroomInput: {
                    type: 'object',
                    properties: {
                        classroom_name: { type: 'string' },
                        teacher: { type: 'integer' },
                        grade: { type: 'string' },
                        school_id: { type: 'integer' },
                        users: { type: 'User[]' },
                        created_at: { type: 'Date' },
                        updated_at: { type: 'Date' }
                    },
                    required: ['teacher', 'grade', 'school_id', 'created_at'],
                },
                ClassroomUser: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        user: { type: 'User' },
                        classroom: { type: 'Classroom' },
                    }
                },
                ClassroomUserInput: {
                    type: 'object',
                    properties: {
                        user: { type: 'User' },
                        classroom: { type: 'Classroom' },
                    },
                    required: ['user', 'classroom'],
                },
                UserImage: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        picture_name: { type: 'string' },
                        picture_path: { type: 'string' }
                    },
                },
                UserImageInput: {
                    type: 'object',
                    properties: {
                        picture_name: { type: 'string' },
                        picture_path: { type: 'string' }
                    },
                    required: ['picture_name', 'picture_path'],
                },
                User: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        firstname: { type: 'string' },
                        lastname: { type: 'string' },
                        mail: { type: 'string' },
                        phone_number: { type: 'integer' },
                        user_image_id: { type: 'number' },
                        password: { type: 'string' },
                        user_role: { type: 'string' },
                        school_id: { type: 'number' },
                        classrooms: { type: 'Classroom[]' },
                        created_at: { type: 'Date' },
                        updated_at: { type: 'Date' }
                    },
                },
                UserInput: {
                    type: 'object',
                    properties: {
                        firstname: { type: 'string' },
                        lastname: { type: 'string' },
                        mail: { type: 'string' },
                        phone_number: { type: 'integer' },
                        user_image_id: { type: 'number' },
                        password: { type: 'string' },
                        user_role: { type: 'string' },
                        school_id: { type: 'number' },
                        classrooms: { type: 'Classroom[]' },
                        created_at: { type: 'Date' },
                        updated_at: { type: 'Date' }
                    },
                    required: ['firstname', 'lastname', 'mail', 'phone_number', 'password', 'user_role', 'school_id', 'classrooms', 'created_at',],
                }
            },
        },
    },
    apis: [path.resolve(__dirname, './routes/*.ts')],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default (app: express.Application) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
