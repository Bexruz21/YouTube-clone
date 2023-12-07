import React, {useState} from 'react'
import "../static/Upload.css"
import axios from "axios"

function VideoUpload() {
    const [file, setFile] = useState()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const uploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('files', file[0])
        axios.post("http://localhost:1337/api/upload", formData)
        .then((res)=>{
            const imageId = res.data[0]
            axios.post("http://localhost:1337/api/videos",{
                data: {
                    title: title,
                    description: desc,
                    video: imageId,
                    user: user
                }      
            }).then((res)=>{
                console.log(res.data.data)
            })
        })
    }

    console.log(user)

    return (
        <React.StrictMode>
            <div className='box'>
                <form className='form'>
                    <input type="file" onChange={e => setFile(e.target.files)} />
                    <input type="text" />
                    <input type="textarea" />
                </form>
            </div>
            {/* <div className="shadow"></div> */}
        </React.StrictMode>

    )
}

export default VideoUpload