import React, { useEffect } from 'react'
import img from "../static/images/youtubelogo.png"
import {RxHamburgerMenu} from "react-icons/rx"
import {MdOutlineVideoLibrary} from "react-icons/md"
import {GrHomeRounded} from "react-icons/gr"
import {MdOutlineSubscriptions} from "react-icons/md"
import {VscHistory} from "react-icons/vsc"
import {RiVideoLine} from "react-icons/ri"
import {SlFilm} from "react-icons/sl"
import {BiLike} from "react-icons/bi"
import {AiOutlineClockCircle} from "react-icons/ai"
import {MdOndemandVideo} from "react-icons/md"


function Menu({shadow, setShadow}) {
    
    useEffect(() => {
        const menu = document.getElementById('menu')
        if (shadow === "block") menu.classList.add('menu_open')
        else menu.classList.remove('menu_open')
    }, [shadow])

    return (
        <React.StrictMode>
            <div className="menu" id='menu'>
                <div className="menu-header">
                    <div className="nav-item" onClick={() => setShadow("none")}>
                        <RxHamburgerMenu size={30}/>
                    </div>
                    <div className="nav-brand">
                        <img src={img} width={120} />
                    </div>
                </div>
                <div className="menu-items">
                    <div className="menu-section">
                        <div className="menu-item">
                            <GrHomeRounded size={20}/>
                            <p>Главная</p>
                        </div>
                        <div className="menu-item">
                            <MdOndemandVideo size={20}/>
                            <p>Shorts</p>
                        </div>
                        <div className="menu-item">
                            <MdOutlineSubscriptions size={20}/>
                            <p>Подписки</p>
                        </div>
                    </div>
                    <div className="menu-section">
                        <div className="menu-item">
                            <MdOutlineVideoLibrary size={20}/>
                            <p>Библиотека</p>
                        </div>
                        <div className="menu-item">
                            <VscHistory size={20}/>
                            <p>История</p>
                        </div>  
                        <div className="menu-item">
                            <RiVideoLine size={20}/>
                            <p>Ваши видео</p>
                        </div>
                        <div className="menu-item">
                            <SlFilm size={20}/>
                            <p>Ваши фильмы</p>
                        </div>
                        <div className="menu-item">
                            <AiOutlineClockCircle size={20}/>
                            <p>Смотреть позже</p>
                        </div>
                        <div className="menu-item">
                            <BiLike size={20}/>
                            <p>Понравившиеся</p>
                        </div>
                    </div>
                    <div className="menu-section">
                        <p className='menu-title'>Навигатор</p>
                        <div className="menu-item">
                            <p>В тренде</p>
                        </div>
                        <div className="menu-item">
                            <p>Музыка</p>
                        </div>
                        <div className="menu-item">
                            <p>Трансляции</p>
                        </div>
                        <div className="menu-item">
                            <p>Видеоигры</p>
                        </div>
                        <div className="menu-item">
                            <p>Новости</p>
                        </div>
                        <div className="menu-item">
                            <p>Спорт</p>
                        </div>
                        <div className="menu-item">
                            <p>Обучение</p>
                        </div>
                        <div className="menu-item">
                            <p>Мода и кросота</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow" style={{display: shadow}}></div>
        </React.StrictMode>
    )
}

export default Menu