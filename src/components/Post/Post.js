import React from 'react';

const Post = ({post}) => {
    const {title, body} = post;

    return (
        <div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};