import React from 'react';
import {useParams} from 'react-router-dom'
import posts from '../data/posts.json';

function BlogpostPage() {
    let {blogId} = useParams();

    return (
        <>
            <article>
                <h1>{posts[blogId - 1].title}</h1>
                <h2>{posts[blogId - 1].date}</h2>
                <h3>{posts[blogId - 1].content}</h3>
            </article>
        </>
    );
}

export default BlogpostPage;