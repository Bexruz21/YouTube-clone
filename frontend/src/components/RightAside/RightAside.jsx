import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BsDot } from 'react-icons/bs'
import { textStrip } from '../../utils/functions'
import { VIDEOS } from '../../utils/urls'
import "./RightAside.css"




function RightAside({ video }) {
    const [videos, setVideos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(VIDEOS + `&filters[category][title][$eq]=${video.attributes.category.data.attributes.title}`)
            .then(res => {
                const filter = res.data.data.filter(thisVideo => thisVideo.id !== video.id)
                setVideos(filter)
            })
    }, [video])

    const changeVideo = (id) => {
        navigate(`/video/${id}`)
        window.location.reload();
    }

    return (
        <div className="rightaside">
            {videos && videos.map(video => (
                <div className="rightaside__video" onClick={() => changeVideo(video.id)} key={video.id}>
                    <div className='rightaside__image'>
                        <video src={`http://localhost:1337${video.attributes.video.data.attributes.url}`}></video>
                    </div>
                    <div className='rightaside__content'>
                        <p className='rightaside__title'>{(video.attributes.title).substr(0, 50)}{(video.attributes.title.length > 50) ? "..." : ""}</p>
                        <div className="rightaside__info">
                            <p>{video.attributes.user.data.attributes.username}</p>
                            <p>{textStrip(video.attributes.views)} просмотров <BsDot /> {(video.attributes.publishedAt).substr(0, 10)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default RightAside