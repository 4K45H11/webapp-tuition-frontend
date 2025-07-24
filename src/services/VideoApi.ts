import api from "./api";
export const fetchVideos = async ()=>{
    const response = await api.get(`/videos`)

    return response.data;
}