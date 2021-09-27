import React from 'react';
import posts from '../data/posts.json';
import {Link, matchPath} from "react-router-dom";

function OverviewPage() {

    const amountBlogs = posts.length;

    const blogTitles = posts.map((post) => {
        return (
            <li key={post.id}>
                <Link to={`/blog/${post.id}`}>
                    <div className="blog-titles">{post.title}</div>
                    {/*{post.title}*/}
                </Link>
            </li>
        )
    })


    console.log(posts);

    return (
        <>
            <h1>Blog Overzichtspagina</h1>
            <h2>Aantal blogposts: {amountBlogs}</h2>
            {/*<div className="blog-titles">{blogTitles}</div>*/}
            {blogTitles}

        </>
    );
}

export default OverviewPage;