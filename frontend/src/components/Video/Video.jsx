import React from 'react'
import {Link} from "react-router-dom"
import {textStrip} from "../../utils/functions"
import { HOST } from '../../utils/urls'
import User from "../../static/images/user.png"
import "./Video.css"



function Video({video}) {
    return (
        <div className='video'>
            <Link to={`/video/${video.id}`}>
                <div className="video__image">
                    <video src={`${HOST}${video.attributes.video.data.attributes.url}`}></video>
                </div>
            </Link>
            <div className="video__content">
                <div className="video__content__user-image">
                    <img src={video.attributes.user.data.attributes.imageUrl} alt="" width={'40px'}/>
                </div>
                <div className="video__content__info">
                    <p className="video__content__info-title">{(video.attributes.title).substr(0, 50)}{(video.attributes.title.length > 50) ? "..." : ""}</p>
                    <p className="video__content__info-author">{video.attributes.user.data.attributes.username}</p>
                    <div className="video__content__info-date">
                        <p>{textStrip(video.attributes.views)} просмотров</p>
                        <p>{(video.attributes.publishedAt).substr(0, 10)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video