import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { TfiSearch } from "react-icons/tfi"
import { MdOutlineVideoCall } from "react-icons/md"
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdKeyboardVoice } from "react-icons/md"
import { IoLogOutOutline } from "react-icons/io5";
import { VIDEOS } from '../../../utils/urls'
import { fetchData, auth } from '../../../utils/functions'
import { useGoogleLogin } from '@react-oauth/google'
import img from "../../../static/images/youtubelogo.png"
import './Navbar.css'




function Navbar({ setSidebar, setVideos }) {
    const user = JSON.parse(localStorage.getItem('user'))
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false)
    const recognition = new window.webkitSpeechRecognition();

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("jwt")
        localStorage.removeItem("videos")
        window.location.reload()
    }

    const search = e => {
        e.preventDefault()
        fetchData(VIDEOS + `&filters[title][$containsi]=${value}`, setVideos)
    }

    const authenticate = useGoogleLogin({
        onSuccess: res => {
            auth(res.access_token)
        },
    });

    const startRecognition = () => {
        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setValue(text);
            fetchData(VIDEOS + `&filters[title][$containsi]=${text}`, setVideos)
        };

        recognition.start();
    };


    return (
        <div className='navbar'>
            <div className="navbar__start">
                <div className="navbar__item" onClick={() => setSidebar("sidebar_active")}>
                    <RxHamburgerMenu size={30} />
                </div>
                <Link to="/">
                    <div className="navbar__brand">
                        <img src={img} width={120} />
                    </div>
                </Link>
            </div>
            <div className="navbar__center">
                <form onSubmit={e => search(e)} className='navbar__search'>
                    <input
                        type="text"
                        className="navbar__search-input"
                        placeholder='Введите запрос'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <div className="navbar__search-icon" onClick={(e) => search(e)}>
                        <TfiSearch size={24} />
                    </div>
                </form>
                <div className="navbar__item navbar__voice-search" onClick={startRecognition}>
                    <MdKeyboardVoice size={30} />
                </div>
            </div>
            <div className="navbar__end">
                <div className="navbar__item">
                    <MdOutlineVideoCall size={35} color={"black"} />
                </div>
                <div className="navbar__item">
                    <IoMdNotificationsOutline color={'black'} size={35} />
                </div>
                {!user ? (
                    <div className="navbar__item navbar__login" onClick={() => authenticate()}>
                        Войти
                    </div>
                ) : (
                    <div className="navbar__item navbar__profile">
                        <img src={user.imageUrl} onClick={() => setOpen(!open)} />
                        <div className={"navbar__drop " + (open ? 'navbar__drop_active' : '')}>
                            <div className="navbar__drop__header">
                                <img src={user.imageUrl} alt="" />
                                <p>{user.username}</p>
                            </div>
                            <div className="navbar__drop__content">
                                <div className="navbar__drop__item" onClick={() => logout()}>
                                    <IoLogOutOutline />
                                    <p>Выйти</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar