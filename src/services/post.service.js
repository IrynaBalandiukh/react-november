import {axiosService} from "./axios.service";

import {urls} from "../constants";

const postService = {
    getAll: (page, limit) => axiosService.get(urls.posts, {
        params: {
            _start: (page-1)*limit,
            _limit: limit
        }
    }),
    getByUserId: (userId) => axiosService.get(`${urls.users}/${userId}/posts`),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postService};