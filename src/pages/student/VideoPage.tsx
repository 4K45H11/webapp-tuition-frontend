import { fetchVideos } from "../../services/VideoApi";
import VideoCard from "../../components/VideoCard";
import { useEffect, useState } from "react";

type Video = {
    _id: string,
    title: string,
    description: string,
    videoUrl: string
}

const VideoPage = () => {
    const [videos, setVideos] = useState<Video[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchVideos()
            .then(setVideos)
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, []);

    console.log(videos)

    return (
        <div className="p-4">
            <h1>Video Lectures</h1>
            {loading ? (<p>Loading...</p>): videos.length===0 ? (<p>No videos available</p>) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        videos.map((v)=>(
                            <VideoCard key={v._id} title={v.title} description={v.description} url={v.videoUrl}/>
                        ))
                    }
                </div>
            ) }
        </div>
    )
}

export default VideoPage;
