import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getAll: () => axiosService.get(urls.comments),
    getByPostId: (postId) => axiosService(`${urls.posts}/${postId}/comments`),
    getById: (id) => axiosService.get(`${urls.comments}/${id}`)
}

export {commentService};