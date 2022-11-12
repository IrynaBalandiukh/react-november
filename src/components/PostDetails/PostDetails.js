import React from 'react';
import {Button} from "../Button/Button";

const PostDetails = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <div>Id: {id}</div>
            <div>User id: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <Button to={'comments'}>get comments</Button>
        </div>
    );
};

export {PostDetails};