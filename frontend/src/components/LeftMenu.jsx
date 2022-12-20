import React from 'react'
import {MdOutlineVideoLibrary} from "react-icons/md"
import {GrHomeRounded} from "react-icons/gr"
import {MdOutlineSubscriptions} from "react-icons/md"
import {MdOndemandVideo} from "react-icons/md"


function LeftMenu() {
    return (
        <div className="leftMenu">
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
            <div className="menu-item">
                <MdOutlineVideoLibrary size={20}/>
                <p>Библиотека</p>
            </div>
        </div>
    )
}

export default LeftMenu