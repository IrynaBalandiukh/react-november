import React from 'react';

const SingleUser = ({user, getUserId}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            {id}--{name}--{username}--{email}
            <button onClick={() => getUserId(id)}>show posts</button>
        </div>
    );
};

export {SingleUser};