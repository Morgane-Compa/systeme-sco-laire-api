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
                        postal_code: { type: 'integer' }
                    },
                },
                SchoolInput: {
                    type: 'object',
                    properties: {
                        school_name: { type: 'string' },
                        street_name: { type: 'string' },
                        street_number: { type: 'integer' },
                        town_name: { type: 'string' },
                        postal_code: { type: 'integer' }
                    },
                    required: ['school_name', 'street_name', 'street_number', 'town_name', 'postal_code'],
                },
                Classroom: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        classroom_name: { type: 'string' },
                        teacher: { type: 'integer' },
                        grade: { type: 'string' },
                        school_id: { type: 'integer' },
                        users: { type: 'integer[]' },
                    },
                },
                ClassroomInput: {
                    type: 'object',
                    properties: {
                        classroom_name: { type: 'string' },
                        teacher: { type: 'integer' },
                        grade: { type: 'string' },
                        school_id: { type: 'integer' },
                        users: { type: 'integer[]' },
                    },
                    required: ['teacher', 'grade', 'school_id'],
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
                        id: { type: 'integer' },
                        firstname: { type: 'string' },
                        lastname: { type: 'string' },
                        mail: { type: 'string' },
                        phone_number: { type: 'string' },
                        user_image: { $ref: '#/components/schemas/UserImage' },
                        user_image_id: { type: 'integer' },
                        password: { type: 'string' },
                        user_role: { type: 'boolean' },
                        school: { $ref: '#/components/schemas/School' },
                        school_id: { type: 'integer' },
                        classrooms: { type: 'array', items: { $ref: '#/components/schemas/Classroom' } },
                        created_at: { type: 'string', format: 'date-time' },
                        updated_at: { type: 'string', format: 'date-time' },
                    },
                },
                UserInput: {
                    type: 'object',
                    properties: {
                        firstname: { type: 'string' },
                        lastname: { type: 'string' },
                        mail: { type: 'string' },
                        phone_number: { type: 'string' },
                        user_image_id: { type: 'integer' },
                        password: { type: 'string' },
                        user_role: { type: 'boolean' },
                        school_id: { type: 'integer' },
                    },
                    required: ['firstname', 'lastname', 'mail', 'phone_number', 'user_image_id', 'password', 'user_role', 'school_id'],
                },
                News: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        news_text: { type: 'string' },
                        image: { type: 'string' },
                        user_id: { type: 'integer' },
                        school_id: { type: 'integer' },
                        classroom_id: { type: 'integer' },
                    },
                },
                NewsInput: {
                    type: 'object',
                    properties: {
                        news_text: { type: 'string' },
                        image: { type: 'string' },
                        user_id: { type: 'integer' },
                        school_id: { type: 'integer' },
                        classroom_id: { type: 'integer' },
                    },
                    required: ['news_text', 'user_id', 'school_id'],
                },
                PrivateMessage: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        message_text: { type: 'string' },
                        image: { type: 'string' },
                        user_id_1: { type: 'integer' },
                        user_id_2: { type: 'integer' },
                    },
                },
                PrivateMessageInput: {
                    type: 'object',
                    properties: {
                        message_text: { type: 'string' },
                        image: { type: 'string' },
                        user_id_1: { type: 'integer' },
                        user_id_2: { type: 'integer' },
                    },
                    required: ['message_text', 'user_id_1', 'user_id_2'],
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
