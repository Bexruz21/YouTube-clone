import React from 'react'
import {Link} from "react-router-dom"
import {MdOutlineVideoLibrary} from "react-icons/md"
import {GrHomeRounded} from "react-icons/gr"
import {MdOutlineSubscriptions} from "react-icons/md"
import {MdOndemandVideo} from "react-icons/md"
import './Aside.css'

function Aside() {
    return (
        <div className="aside">
            <Link to="/">
                <div className="aside__item">
                    <GrHomeRounded size={20}/>
                    <p>Главная</p>
                </div>
            </Link>
            <div className="aside__item">
                <MdOndemandVideo size={20}/>
                <p>Shorts</p>
            </div>
            <div className="aside__item">
                <MdOutlineSubscriptions size={20}/>
                <p>Подписки</p>
            </div>
            <Link to="/library">
                <div className="aside__item">
                    <MdOutlineVideoLibrary size={20}/>
                    <p>Библиотека</p>
                </div>
            </Link>   
        </div>
    )
}

export default Aside