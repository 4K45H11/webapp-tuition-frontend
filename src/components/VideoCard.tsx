import React from "react";

type VideoProps = {
    title: string,
    description: string,
    url: string
}


const getEmbededUrl = (url: string) => {

    try {
        if (url.includes("youtube.com/watch?v=")) {
            const videoId = new URL(url).searchParams.get('v')
            return `https://www.youtube.com/embed/${videoId}`
        }
    } catch (err) {
        console.error("Invalid video URL:", url);
        return url;
    }
}

const VideoCard: React.FC<VideoProps> = ({ title, description, url }) => {

    const embededUrl = getEmbededUrl(url)
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">

            <div className="aspect-video">
                <iframe className="w-full h-full" src={embededUrl} title={title} allowFullScreen allow="autoplay; encrypted-media"></iframe>
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
            </div>

        </div>
    )
}

export default VideoCard;