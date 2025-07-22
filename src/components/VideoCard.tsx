import React from "react";

type VideoProps = {
    title: string,
    description: string,
    url: string
}

const VideoCard: React.FC<VideoProps> = ({ title, description, url }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">

            <div className="aspect-video">
                <iframe className="w-full h-full" src={url} title={title} allowFullScreen></iframe>
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
            </div>

        </div>
    )
}

export default VideoCard;