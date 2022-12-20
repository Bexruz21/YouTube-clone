import React from 'react'
import img from "../static/images/youtubelogo.png"
import user from "../static/images/user.png"
import {RxHamburgerMenu} from "react-icons/rx"
import {TfiSearch} from "react-icons/tfi"
import {MdOutlineVideoCall} from "react-icons/md"
import {IoMdNotificationsOutline} from "react-icons/io"
import {MdKeyboardVoice} from "react-icons/md"



function Navbar({setShadow}) {

    return (
        <div className='navbar'>
            <div className="container">
                <div className="nav-start">
                    <div className="nav-item" onClick={() => setShadow("block")}>
                        <RxHamburgerMenu size={30}/>
                    </div>
                    <div className="nav-brand">
                        <img src={img} width={120} />
                    </div>
                </div>
                <div className="nav-center">
                    <input 
                        type="text" 
                        className="nav-search"
                        placeholder='Введите запрос'
                    
                    />
                    <div className="search">
                        <TfiSearch size={24}/>
                    </div>
                    <div className="nav-item voice-search">
                        <MdKeyboardVoice size={30}/>
                    </div>
                </div>
                <div className="nav-end">
                    <div className="nav-item">
                        <MdOutlineVideoCall size={35} color={"black"}/>
                    </div>
                    <div className="nav-item">
                        <IoMdNotificationsOutline color={'black'} size={35}/>
                    </div>
                    <div className="nav-item profile">
                        <img src={user} width={35} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar