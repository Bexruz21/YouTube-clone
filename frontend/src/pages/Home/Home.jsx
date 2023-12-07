import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Videos from '../../components/Videos/Videos'
import { VIDEOS } from '../../utils/urls'
import { fetchData } from '../../utils/functions'
import "./Home.css"
import { useDispatch } from 'react-redux'
import store from '../../store/store'
import { getVideos } from '../../features/video'


function Home() {
    // const dispatch = useDispatch()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        // dispatch(getVideos())
        fetchData(VIDEOS, setVideos)
    }, [])


    return (
        <Layout setVideos={setVideos}>
            <div className="videos">
                <div className="videos__content">
                    <Videos videos={videos}/>
                </div>
            </div>
        </Layout>
    )
}

export default Home