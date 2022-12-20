import React from 'react'

function Video({video}) {

    const textStrip = (text, attribute) => {
        if (attribute === 'views') {
            if (text < 1000) {
                return `${text}`
            } else if (text >= 1000 && text < 1000000) {
                return `${String(text).slice(0, -3)} тыс.`
            } else {
                return `${String(text).slice(0, -6)} млн.`
            }
        } else {
            if (text < 7) {
                return `${text} дня`
            } else if (text >= 7 && text < 30) {
                return `${Math.round(text/7)} недели`
            } else if (text >= 30 && text < 365) {
                return `${Math.round(text/30)} месяц`
            } else {
                return `${Math.round((text/30)/12)} года`
            }
        }
    }

    return (
        <div className='video'>
            <div className="video-image">
                <video src=""></video>
            </div>
            <div className="video-content">
                <div className="user-image">
                    <img src="" alt="" />
                </div>
                <div className="video-info">
                    <p className="title">{video.title}</p>
                    <p className="username">{video.username}</p>
                    <div className="flex">
                        <p className="views">{textStrip(video.views, "views")} просмотров</p>
                        <p className="published">{textStrip(video.published, "data")} назад</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video