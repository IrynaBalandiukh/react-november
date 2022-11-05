import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({getUser, setUserId}) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    const getUserId = async (id) => {
        const {data} = await userService.getById(id);
        setUser(data)
    }

    return (
        <div>
            <div>{users.map(user => <User key={user.id} user={user} getUserId={getUserId} getUser={getUser} setUserId={setUserId}/>)}</div>
            <hr/>
            {user && <div>{user.name}--{user.username}</div>}
        </div>
    );
};

export {Users};