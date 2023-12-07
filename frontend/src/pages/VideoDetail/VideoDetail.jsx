import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useGoogleLogin } from '@react-oauth/google'
import { HOST, SUBSCRIBES, VIDEO } from '../../utils/urls'
import DetailLayout from '../DetailLayout/DetailLayout'
import VideoReview from '../../components/VideoReview/VideoReview'
import { BiLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi"
import { AiFillLike } from "react-icons/ai"
import { GiSaveArrow } from "react-icons/gi"
import { auth, fetchData, textStrip } from '../../utils/functions'
import { AiFillDislike } from 'react-icons/ai'
import "./VideoDetail.css"



function VideoDetail() {
    const user = JSON.parse(localStorage.getItem("user"))
    const [local, setLocal] = useState(JSON.parse(localStorage.getItem("videos")) || [])
    const [video, setVideo] = useState(null)
    const [likes, setLikes] = useState([])
    const [dislikes, setDislikes] = useState([])
    const [subscribes, setSubscribes] = useState([])
    const [isLater, setIsLater] = useState(false)
    const isLiked = (user && user.username) ? likes.filter(like => like.attributes.username === user.username) : []
    const isDisliked = (user && user.username) ? dislikes.filter(dislike => dislike.attributes.username === user.username) : []
    const isSubscribe = (user && video && user.username) ? subscribes.filter(subscribe => subscribe.username === user.username) : []
    const params = useParams()

    const authenticate = useGoogleLogin({
        onSuccess: res => {
            auth(res.access_token)
        },
    });

    const load = () => {
        fetchData(VIDEO.replace("/id", `/${params.id}`), setVideo)
        axios.get(VIDEO.replace("/id", `/${params.id}`))
            .then(res => {
                setLikes(res.data.data.attributes.likes.data);
                setDislikes(res.data.data.attributes.dislikes.data);
            });

        userInLike();
        userInDislike();
    };



    const userInLike = () => {
        if (!user || !video) {
            return <BiLike size={20} />;
        }
        const hasLike = likes.some(like => like.attributes.username === user.username);
        return hasLike ? <AiFillLike size={20} /> : <BiLike size={20} />;
    }

    const userInDislike = () => {
        if (!user || !video) {
            return <BiDislike size={20} />;
        }
        const hasDislike = dislikes.some(dislike => dislike.attributes.username === user.username);
        return hasDislike ? <AiFillDislike size={20} /> : <BiDislike size={20} />;
    }

    const getSubscribes = () => {
        if (video) {
            axios.get(SUBSCRIBES.replace("id", video.attributes.user.data.id))
                .then(res => setSubscribes(res.data.subscribes));
        }
    };

    const addView = id => {
        axios.put(VIDEO.replace('/id', `/${id}`), {
            data: { views: Number(video.attributes.views) + 1 }
        });
    };




    const updateLikes = (id, action) => {
        const updatedLikes = action === 'like'
            ? [...likes, user]
            : likes.filter(like => like.id !== user.id);

        axios.put(VIDEO.replace('/id', `/${id}`), {
            data: { likes: updatedLikes }
        }).then(res => load()).catch(err => console.error(err));
    };

    const updateDislikes = (id, action) => {
        const updatedDislikes = action === 'dislike'
            ? [...dislikes, user]
            : dislikes.filter(dislike => dislike.id !== user.id);

        axios.put(VIDEO.replace('/id', `/${id}`), {
            data: { dislikes: updatedDislikes }
        }).then(res => load()).catch(err => console.error(err));
    };

    const likeToPost = id => {
        if (!user) {
            authenticate()
            return;
        }
        if (isDisliked[0]) {
            updateLikes(id, 'like');
            updateDislikes(id, 'remove');
        } else {
            updateLikes(id, isLiked[0] ? 'remove' : 'like');
        }
    };

    const dislikeToPost = id => {
        if (!user) {
            authenticate()
            return;
        }
        if (isLiked[0]) {
            updateDislikes(id, 'dislike');
            updateLikes(id, 'remove');
        } else {
            updateDislikes(id, isDisliked[0] ? 'remove' : 'dislike');
        }
    };


    const addSubscribe = id => {
        if (!user) {
            authenticate()
            return;
        }
        const updatedSubscribes = isSubscribe[0]
            ? subscribes.filter(subscribe => subscribe.id !== user.id)
            : [...subscribes, user];
        axios.put(SUBSCRIBES.replace('/id', `/${id}`), {
            subscribes: updatedSubscribes
        }).then(res => getSubscribes());
    };




    const later = () => {
        if (video) {
            const has = local.some(vd => vd.id === video.id);
            setIsLater(has);
        }
    };

    const saveToLocal = video => {
        if (!user) {
            authenticate()
            return;
        }
        const hasVideo = local.find(thisVideo => thisVideo.id === video.id);
        if (hasVideo) {
            setLocal(local.filter(thisVideo => thisVideo.id !== video.id));
        } else {
            setLocal([...local, video]);
        }
    };

    useEffect(() => {
        load();
    }, [params.id]);

    useEffect(() => {
        if (video) {
            addView(video.id);
            getSubscribes()
        }
    }, [video]);

    useEffect(() => {
        localStorage.setItem("videos", JSON.stringify(local))
        later()
    }, [local, video])


    if (!video) return <></>

    return (
        <DetailLayout video={video}>
            <div className="detail">
                <div className="detail__header">
                    <video src={`${HOST}${video.attributes.video.data.attributes.url}`} controls autoPlay></video>
                </div>
                <div className="detail__content">
                    <h1 className='detail__title'>{video.attributes.title}</h1>
                    <div className="detail__items">
                        <div className="detail__item">
                            <div className="detail__author">
                                <img width='40px' src={video.attributes.user.data.attributes.imageUrl} alt="" />
                            </div>
                            <div className="detail__author-info">
                                <h4 className='detail__author'>{video.attributes.user.data.attributes.username}</h4>
                                <p className='detail__subscribes'>{subscribes.length} подписчиков</p>
                            </div>
                            <button className='detail__subscribe' onClick={() => addSubscribe(video.attributes.user.data.id)}>{(isSubscribe[0]) ? "Отписаться" : "Подписаться"}</button>
                        </div>
                        <div className="detail__item">
                            <div className="detail__likes">
                                <div className="detail__like" onClick={() => likeToPost(video.id)}>
                                    {userInLike()}
                                    <p>{likes.length}</p>
                                </div>
                                <div className="detail__dislike" onClick={() => dislikeToPost(video.id)}>
                                    {userInDislike()}
                                </div>
                            </div>
                            <div
                                className={(isLater) ? "detail__share-active" : "detail__share"}
                                onClick={() => saveToLocal(video)}
                            >
                                <GiSaveArrow size={20} />
                                <p>Смотреть позже</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='detail__description'>
                    <p className='detail__description__header'>{textStrip(video.attributes.views)} просмотров | {video.attributes.publishedAt.substr(0, 10)}</p>
                    <div className="detail__descripton__content">
                        <p className='video-description'>{video.attributes.description}</p>
                    </div>
                </div>
                <VideoReview id={params.id} />
            </div>
        </DetailLayout >
    )
}

export default VideoDetail