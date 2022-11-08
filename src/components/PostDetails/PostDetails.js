import React from 'react';

const PostDetails = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <div>Id: {id}</div>
            <div>User id: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {PostDetails};