/*
 * This is a simple Fastify server.
 */

// Require Fastify
const fastify = require('fastify');

// Initialize server on port 3000
const PORT = process.env.PORT || 3000;

// Require the database
const db = require('./config/db')

// Require the routes
const routes = require('./routes/postRoutes')

// Enable the built-in logger in Fastify, which is disabled by default
const app = fastify({
    logger: true,
    pluginTimeout: 12000
})

// Bring db as middleware(?)
app.register(db)

// Initialize routes with Fastify by looping over route array
routes.forEach((route, index) => {
    app.route(route)
})

// Declare a route
app.get("/", async () => {
    return {
        Message: "Fastify is on fire"
    }
})

// Declare function that runs the server
const start = async () => {
    try {
        await app.listen(PORT)
        app.log.info(`Server listening on ${app.server.address().port})`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

// Start the server
start();