import React from 'react';
import { useParams } from 'react-router-dom'

function BlogpostPage() {
    const { id } = useParams();

    return (
        <>
            <h1>Inlog Pagina met {id}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto aut, autem debitis doloribus esse
                obcaecati optio? Eius, libero, quod.</p>
        </>
    );
}

export default BlogpostPage;