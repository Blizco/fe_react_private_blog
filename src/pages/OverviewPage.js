import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function OverviewPage() {

    const amountBlogs = posts.length;

    const blogTitles = posts.map((post) => {
        return (
            <section key={post.id}>
                <li>
                    <Link to={`/blog/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                </li>
            </section>
        )
    })

    return (
        <>
            <h1>Blog Overzichtspagina</h1>
            <h2>Aantal blogposts: {amountBlogs}</h2>
            {blogTitles}

        </>
    );
}

export default OverviewPage;