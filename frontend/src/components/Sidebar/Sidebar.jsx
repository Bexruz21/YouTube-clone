import React from 'react'
import { Link } from "react-router-dom"
import img from "../../static/images/youtubelogo.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdOutlineVideoLibrary } from "react-icons/md"
import { GrHomeRounded } from "react-icons/gr"
import { MdOutlineSubscriptions } from "react-icons/md"
import { VscHistory } from "react-icons/vsc"
import { RiVideoLine } from "react-icons/ri"
import { SlFilm } from "react-icons/sl"
import { BiLike } from "react-icons/bi"
import { AiOutlineClockCircle } from "react-icons/ai"
import { MdOndemandVideo } from "react-icons/md"
import { HiFire } from "react-icons/hi"
import { IoMusicalNoteOutline } from "react-icons/io5"
import { BsBroadcast } from "react-icons/bs"
import { CgGames } from "react-icons/cg"
import { IoNewspaperOutline } from "react-icons/io5"
import { TfiCup } from "react-icons/tfi"
import { AiOutlineBulb } from "react-icons/ai"
import { GiHanger } from "react-icons/gi"
import "./Sidebar.css"


function Sidebar({ sidebar, setSidebar }) {
    return (
        <>
            <div className={"sidebar " + sidebar}>
                <div className="sidebar__header">
                    <div className="siderbar__item" onClick={() => setSidebar("")}>
                        <RxHamburgerMenu size={30} />
                    </div>
                    <div className="sidebar__brand">
                        <img src={img} width={120} />
                    </div>
                </div>
                <div className="sidebar__content">
                    <div className="sidebar__items">
                        <Link to="/">
                            <div className="sidebar__item">
                                <GrHomeRounded size={20} />
                                <p>Главная</p>
                            </div>
                        </Link>
                        <div className="sidebar__item">
                            <MdOndemandVideo size={20} />
                            <p>Shorts</p>
                        </div>
                        <div className="sidebar__item">
                            <MdOutlineSubscriptions size={20} />
                            <p>Подписки</p>
                        </div>
                    </div>
                    <div className="sidebar__items">
                        <Link to="/library">
                            <div className="sidebar__item">
                                <MdOutlineVideoLibrary size={20} />
                                <p>Библиотека</p>
                            </div>
                        </Link>
                        <div className="sidebar__item">
                            <VscHistory size={20} />
                            <p>История</p>
                        </div>
                        <div className="sidebar__item">
                            <RiVideoLine size={20} />
                            <p>Ваши видео</p>
                        </div>
                        <div className="sidebar__item">
                            <SlFilm size={20} />
                            <p>Ваши фильмы</p>
                        </div>
                        <div className="sidebar__item">
                            <AiOutlineClockCircle size={20} />
                            <p>Смотреть позже</p>
                        </div>
                        <div className="sidebar__item">
                            <BiLike size={20} />
                            <p>Понравившиеся</p>
                        </div>
                    </div>
                    <div className="sidebar__items">
                        <p className='menu-title'>Навигатор</p>
                        <div className="sidebar__item">
                            <HiFire size={25} />
                            <p>В тренде</p>
                        </div>
                        <div className="sidebar__item">
                            <IoMusicalNoteOutline size={23} />
                            <p>Музыка</p>
                        </div>
                        <div className="sidebar__item">
                            <BsBroadcast size={23} />
                            <p>Трансляции</p>
                        </div>
                        <div className="sidebar__item">
                            <CgGames size={23} />
                            <p>Видеоигры</p>
                        </div>
                        <div className="sidebar__item">
                            <IoNewspaperOutline size={23} />
                            <p>Новости</p>
                        </div>
                        <div className="sidebar__item">
                            <TfiCup size={23} />
                            <p>Спорт</p>
                        </div>
                        <div className="sidebar__item">
                            <AiOutlineBulb size={23} />
                            <p>Обучение</p>
                        </div>
                        <div className="sidebar__item">
                            <GiHanger size={23} />
                            <p>Мода и кросота</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"sidebar__shadow " + sidebar} onClick={() => setSidebar('')}></div>
        </>
    )
}

export default Sidebar