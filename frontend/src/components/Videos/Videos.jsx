import React from 'react'
import { useSelector } from 'react-redux'
import Video from "../Video/Video"



function Videos({videos}) {
    // const videos = useSelector(state => state.video.videos)
    return (
        <>
            {videos.map(video => (
                <Video video={video}/>
            ))}
        </>
    )
}

export default Videos