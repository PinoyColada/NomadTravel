const db = require('../db');
const { Post, Comment } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createPost = async () => {
    const posts = [{
        title: "Fun in Rome",
        image: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
        location: "Italy, Rome",
        author: "Raymond",
        description: "Had a blast this weekend by visiting the Colosseum with my family! It was fun wondering through Rome's ancient streets"
    },
    {
        title: "The Great Taj Mahal",
        image: "https://th-thumbnailer.cdn-si-edu.com/NaExfGA1op64-UvPUjYE5ZqCefk=/fit-in/1600x0/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
        location: "Agra, Uttar Pradesh, India",
        author: "Julienne",
        description: "Went with my boyfriend to see Taj Mahal and it was an amazing experience! I didn't know it was made out of white marble."
    }
]

    await Post.insertMany(posts);
    console.log('Created Posts!');
    return posts;
}

const createComment = async () => {
    const author1 = await Post.find({ author: 'Raymond' })
    const author2 = await Post.find({ author: 'Julienne' })

    const comments = [{
        name: "Jack",
        rating: 5,
        description: "The Colosseum sounds like a great place to visit.",
        post_id: author1[0]._id
    },
    {
        name: "Richard",
        rating: 4,
        description: "I also went to see the Taj Mahal last year. However, I wasn't able to spend alot of time there.",
        post_id: author2[0]._id
    }]

    await Comment.insertMany(comments);
    console.log('Created Comments in Posts!');
}

const run = async () => {
    await createPost();
    await createComment();
    db.close();
}

run();