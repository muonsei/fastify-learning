const boom = require('boom')

const Blog = require("../models/Post")

// Get all posts
exports.getAllPost = async (request, reply) => {
    try {
        let posts = await Blog.find();
        return posts;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Get a single post by ID
exports.getSinglePost = async (request, reply) => {
    try {
        const id = request.params.id;
        let post = await Blog.findById(id);
        return post;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Add a new post
exports.addNewPost = async (request, reply) => {
    try {
        let post = new Blog(request.body);
        let newpost = await post.save();
        return newpost;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Update an existing post by ID
exports.updatePost = async (request, reply) => {
    try {
        const id = request.params.id;
        let result = await Blog.findByIdAndUpdate(id, request.body, {
            new: true
        });
        return result;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Delete a post by ID
exports.deletePost = async (request, reply) => {
    try {
        const id = request.params.id;
        let result = await Blog.findByIdAndDelete(id);
        return {
            Message: "Post Deleted."
        }
    } catch (err) {
        throw boom.boomify(err);
    }
}