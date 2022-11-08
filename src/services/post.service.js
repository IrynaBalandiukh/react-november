import {axiosService} from "./axios.service";

import {urls} from "../constants";

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getByUserId: (userId) => axiosService.get(`${urls.users}/${userId}/posts`),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postService};