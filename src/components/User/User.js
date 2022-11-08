import React from 'react';

import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div>
            {id} -- {name} -- {username}
            <Button to={`${id}`} state={user}>get details</Button>
        </div>
    );
};

export {User};