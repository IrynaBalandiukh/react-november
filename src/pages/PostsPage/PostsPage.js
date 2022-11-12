import React, {useEffect, useState} from 'react';
import {Outlet, useParams, useSearchParams} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1', limit: 10});

    useEffect(() => {
        if (userId) {
            postService.getByUserId(userId).then(({data}) => setPosts(data))
        } else {
            postService.getAll(query.get('page'), query.get('limit')).then(({data}) => setPosts(data))
        }
    }, [userId, query])

    const nextPage = () => {
        const queryObj = Object.fromEntries(query.entries())
        queryObj.page++
        setQuery(queryObj)
        console.log(queryObj)
    }

    return (
        <div style={{display: 'flex'}}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}
                <button onClick={() => nextPage()}>next page</button>
            </div>

            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};