import React from 'react';

const User = ({user, getUserId, getUser, setUserId}) => {
    const {id, name, username} = user;

    return (
        <div>
            {id}--{name}--{username}
            <button onClick={() => {
                getUserId(id)
                getUser(user)
                setUserId(false)
            }}>click</button>
        </div>
    );
};

export {User};