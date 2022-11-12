import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name} = comment;
    return (
        <div>
            <div>Post id: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
        </div>
    );
};

export {Comment};