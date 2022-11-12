import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";
import {postService} from "../../services";
import {PostDetails} from "../../components";

const PostDetailsPage = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {postId} = useParams();

    useEffect(() => {
        if (!state) {
            postService.getById(postId).then(({data}) => setPost(data))
        } else {
            setPost(state)
        }
    }, [postId, state])

    return (
        <div>
            <div>
                {post && <PostDetails post={post}/>}
            </div>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};