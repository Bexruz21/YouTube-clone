import React, {useState} from 'react'
import Navbar from '../../components/Header/Navbar/Navbar'
import RightAside from '../../components/RightAside/RightAside'
import Sidebar from '../../components/Sidebar/Sidebar'
import './DetailLayout.css'

function DetailLayout({ children, video }) {
    const [sidebar, setSidebar] = useState('')
    return (
        <>
            <Navbar setSidebar={setSidebar} />
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            <div className="details">
                {children}
                <RightAside video={video} />
            </div>
        </>
    )
}

export default DetailLayout