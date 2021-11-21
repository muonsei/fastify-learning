/*
 * This enables MongoDB to create a database.
 */

// Require Fastify
const fastifyPlugin = require('fastify-plugin');

// Require Mongoose
const mongoose = require('mongoose');

// Connect to database
async function dbConnector(fastify, options, done) {
    try {
        const url = "mongodb://localhost:27017/fastify-blog"
        const db = await mongoose
        .connect(url, {
            useNewUrlParser: true
        })
        console.log("Database is connected");
        fastify.decorate("mongo", db);
    } catch (err) {
        console.log(err)
    }
}

module.exports = fastifyPlugin(dbConnector)