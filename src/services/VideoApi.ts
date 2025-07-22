import axios from "axios";
export const fetchVideos = async ()=>{
    const response = await axios.get(`http://localhost:5000/videos`)

    return response.data;
}