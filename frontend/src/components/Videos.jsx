import React, { useState } from 'react'
import Video from "./Video"




function Videos() {

    const [videos, setVideos] = useState([
        {id: 0, title: "Провёл 24часа на бункере на случай конца света", username: "MrBest", views: 3000000, published: 390},
        {id: 1, title: "4df", username: "555", views: 999, published: 34},
        {id: 2, title: "gfdgs", username: "773", views: 40000, published: 93},
        {id: 3, title: "3fsd", username: "727", views: 5000, published: 390},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
        {id: 4, title: "jriid", username: "1123", views: 6000, published: 20},
    ])

    return (
        <React.StrictMode>
            <div className="video-contents">
                {videos.map(video => (
                    <Video video={video}/>
                ))}
            </div>
        </React.StrictMode>
    )
}

export default Videos