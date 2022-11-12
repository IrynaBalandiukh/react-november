import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import css from "./MainLayout.module.css";
import {useAuth} from "../../hooks";

const MainLayout = () => {
    const navigate = useNavigate();
    const {user, logOut} = useAuth();
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                {user && <h1>{user}<button onClick={()=>logOut(()=>navigate('/'))}>logout</button></h1>}
            </div>
            <button onClick={() => navigate(-1)}>prev</button>
            <button onClick={() => navigate(1)}>next</button>
            <div><Outlet/></div>
        </div>
    );
};

export {MainLayout};