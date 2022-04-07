// const db = require('../db');
// const { Post, Comment } = require('../models');

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const createPost = async () => {
//     const posts = [{
//         title: "Fun in Rome",
//         image: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
//         location: "Italy, Rome",
//         author: "Raymond",
//         description: "Had a blast this weekend by visiting the Colosseum with my family! It was fun wondering through Rome's ancient streets"
//     },
//     {
//         title: "The Great Taj Mahal",
//         image: "https://th-thumbnailer.cdn-si-edu.com/NaExfGA1op64-UvPUjYE5ZqCefk=/fit-in/1600x0/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
//         location: "Agra, Uttar Pradesh, India",
//         author: "Julienne",
//         description: "Went with my boyfriend to see Taj Mahal and it was an amazing experience! I didn't know it was made out of white marble."
//     }
// ]

//     await Post.insertMany(posts);
//     console.log('Created Posts!');
//     return posts;
// }

// const createComment = async () => {
//     const author1 = await Post.find({ author: 'Raymond' })
//     const author2 = await Post.find({ author: 'Julienne' })

//     const comments = [{
//         name: "Jack",
//         rating: 5,
//         description: "The Colosseum sounds like a great place to visit.",
//         post_id: author1[0]._id
//     },
//     {
//         name: "Richard",
//         rating: 4,
//         description: "I also went to see the Taj Mahal last year. However, I wasn't able to spend alot of time there.",
//         post_id: author2[0]._id
//     }]

//     await Comment.insertMany(comments);
//     console.log('Created Comments in Posts!');
// }

// const run = async () => {
//     await createPost();
//     await createComment();
//     db.close();
// }

// run();

const db = require('../db')
const { Posts } = require('../models')
const { Comments } = require('../models')

const main = async () => {
    const posts = [
        {
            location: 'Amsterdam',
            country: 'Netherlands',
            continent: 'Europe',
            title: 'The Origins of the Dutch Windmill',
            author: 'Sheeva Shabahang',
            story:
                'Some people love Amsterdam for the debauchery, but I love Amsterdam for its ingenious engineering solutions. One example is the quintessential Dutch windmill. The windmills were initially used to grind grain into flour, but eventually all kinds of industrial applications were added. For example, structural beauties pressed oil, made paint, and could even saw tree trunks!',
            image:
                'https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634517886/Amsterdam_m0ea93.jpg'
        },
        {
            location: 'Cusco',
            country: 'Peru',
            continent: 'South America',
            title: 'Taking a Hike',
            author: 'Jason McCoy',
            story:
                'Cusco, often spelled Cuzco, is a city in southeastern Peru near the Urubamba Valley of the Andes mountain range. It is the capital of the Cusco Region and of the Cusco Province. The city is the seventh most populous in Peru and, in 2017, had a population of 428,450.',
            image:
                'https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634527858/CuscoPeru_d7d9dr.jpg'
        }
    ]

    const comments = [
        {
            Posts: '624d930881ed644704666d3e',
            comment: 'Cannot wait to visit!',
            name: 'Michael'
        },
        { Posts: '624d930881ed644704666d3f', comment: 'Wow!', name: 'Ruthie' }
    ]

    await Posts.insertMany(posts)
    await Comments.insertMany(comments)
    console.log('Travel incoming!')
}

const run = async () => {
    await main()
    db.close()
}
run()