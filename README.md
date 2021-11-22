# fastify-learning

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#postman">Postman</a></li>
        <li><a href="#curl">cURL</a></li>
      </ul>
    </li>
    <li><a href="#troubleshooting">Troubleshooting</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About the Project
This is a practice repository for learning how to build a REST service using Fastify framework for NodeJS.

## Prerequisites
- MongoDB. See [this link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition) for instructions.
- NodeJS and NPM. See [this link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition) for instructions.

## Getting Started

1. Install prerequisites. See [Prerequisites](#prerequisites) section.
2. Make sure MongoDB is running. For more information on how to use MongoDB, please refer to [this documentation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#procedure). Start MongoDB in the terminal using:
  ```bash
  sudo service mongod start
  ```
  Check MongoDB status in the terminal using:
  ```bash
  service mongod status
  ```
3. Clone the repository or follow the instructions at [Build a REST Service with Fastify](https://codesource.io/build-a-rest-service-with-fastify/). See notes for some changes in [Acknowledgments](#acknowledgments).
4. In the root folder `fastify-learning`, install the modules:
```bash
  npm i
```
5. Run the server by using:
```bash
nodemon index.js
```
6. Use the API using [Usage](#usage).
7. Close MongoDB if you want to:
```bash
service mongod stop
```

## Usage
Use Postman or cURL to do HTTP Requests.

### Postman
#### Create Blog Post
POST `localhost:3000/api/post`

**Request Type:** JSON

**Request Body:**
```JSON
{
  "title" : "Title Of Blog",
  "content" : "This is the content of the blog post.",
  "category" : "Random",
  "author" : "Jane Doe"
}
```

#### Get All Posts
POST `localhost:3000/api/posts`

#### Get Blog Post By ID
POST `localhost:3000/api/post/:id`

Change `:id` to actual ID.

#### Update Blog Post
PUT `localhost:3000/api/post/:id`

**Request Type:** JSON

Change `:id` to actual ID. Choose at least one parameter from those written in the request body below (not all are required during update)

**Request body**
```json
{
  "title" : "This is a new title.",
  "content" : "This is a new content.",
  "category" : "NewCategory",
  "author" : "John Doe"
}
```

#### Delete Blog Post
DELETE `localhost:3000/api/post/:id`

Change `:id` to actual ID.

### cURL
To use cURL for HTTP requests, you may follow these formats specified below. You may also do the following replacements:
- Replace `-H` with `--header` 
- Replace `-d` with `--data`
#### Create Blog Post
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d "{
    "title" : "Title Of Blog",
    "content" : "This is the content of the blog post.",
    "category" : "Random",
    "author" : "Jane Doe"
  }" \
  "localhost:3000/api/post"
```

#### Get All Posts
```bash
curl -X GET "localhost:3000/api/posts"
```

#### Get Blog Post By ID
```bash
curl -X POST "localhost:3000/api/post/:id"
```

Change `:id` to actual ID.

#### Update Blog Post
```bash
curl -X PUT \
  -H "Content-Type: application/json" \
  -d "{
    "title" : "This is a new title.",
    "content" : "This is a new content.",
    "category" : "NewCategory",
    "author" : "John Doe"
  }" \
  "localhost:3000/api/post/:id"
```

Change `:id` to actual ID. Choose at least one parameter from those written in the request body (not all are required during update).

#### Delete Blog Post
```bash
curl -X DELETE "localhost:3000/api/post/:id"
```

Change `:id` to actual ID.

## Troubleshooting
- `ERR_AVVIO_PLUGIN_TIMEOUT`: plugin did not start in time. You may have forgotten to call 'done' function or to resolve a Promise.
  - Check if MongoDB is running using `service mongod status`. If not, simply start it using `sudo service mongod start`.

## Acknowledgments
This repository was built using instructions from [Build a REST Service with Fastify](https://codesource.io/build-a-rest-service-with-fastify/); exact instructions were followed except the middleware part where
```js
app.use(db())
```
was changed to
```js
app.register(db)
```