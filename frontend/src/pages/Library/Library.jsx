import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Video from '../../components/Video/Video'
import { AiOutlineClockCircle } from "react-icons/ai"
import { BiLike } from "react-icons/bi"
import { VIDEOS } from '../../utils/urls'
import { fetchData } from '../../utils/functions'
import "./Library.css"



function Library() {
    const [user] = useState(JSON.parse(localStorage.getItem("user")))
    const [localVideos] = useState(JSON.parse(localStorage.getItem("videos")))
    const [videos, setVideos] = useState([])
    const [userVideos, setUserVideos] = useState([])

    const load = () => {
        if (!user) return
        fetchData(VIDEOS + `&filters[likes][id][$contains]=${user.id}`, setVideos)
        fetchData(VIDEOS + `&filters[user][id][$eq]=${user.id}`, setUserVideos)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <Layout>
            <section className="library">
                <div className="library__header">
                    {user ? (
                        <div className="library__profile">
                            <div className="library__profile__image">
                                <img src={user.imageUrl} />
                            </div>
                            <div className="library__profile__about">
                                <h1>{(user) ? user.username : ""}</h1>
                                <div className="library__profle__about-videos">
                                    <p>Мои видео: {userVideos.length}</p>
                                    <p>Отметки "Нравится": {videos.length}</p>
                                </div>
                            </div>
                        </div>
                    ): <h1>Аноним</h1>}
                </div>
                <div className="library__content">
                    <div className="library__content-videos">
                        <div className="library__item">
                            <AiOutlineClockCircle size={20} />
                            <p>Смотреть позже</p>
                        </div>
                        <div className="library__videos">
                            {localVideos && localVideos.map(video => (
                                <Video video={video} />
                            ))}
                        </div>
                    </div>
                    <div className="library__content-videos">
                        <div className="library__item">
                            <BiLike size={20} />
                            <p>Понравившиеся</p>
                        </div>
                        <div className="library__videos">
                            {videos && videos.map(video => (
                                <Video video={video} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Library