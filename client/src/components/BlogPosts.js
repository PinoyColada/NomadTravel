import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoadBlogPosts } from "../store/actions/BlogPostActions";
import Comments from './Comments'
import Likes from './Likes'

const mapStateToProps = ({ blogState }) => {
    return { blogState };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogPosts: () => dispatch(LoadBlogPosts()),
    };
};

const BlogPosts = (props) => {

    useEffect(() => {
        props.fetchBlogPosts()
    }, [])

    return (
        <div className="blog-post-container">
            {props.blogState.blogPosts.map((blogPost) => (
                <ul className='location-list' key={blogPost.id}>
                    <h2>{blogPost.title}</h2>
                    <h3>Continent: {blogPost.continent}</h3>
                    <h3>Country: {blogPost.country}</h3>
                    <h3>City: {blogPost.location}</h3>
                    <h5>Author: {blogPost.author}</h5>
                    <p>{blogPost.story}</p>
                    <image src={`${blogPost.image}`} />
                    <Likes />
                    <Comments />
                </ul>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPosts)