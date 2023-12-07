import React, { useState, useEffect } from 'react'
import { CATEGORIES, VIDEOS } from '../../../utils/urls'
import { fetchData } from '../../../utils/functions'
import './Category.css'


function Category({ setVideos }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchData(CATEGORIES, setCategories)
    }, [])

    const filter = value => {
        fetchData(VIDEOS + `&filters[category][title][$eq]=${value}`, setVideos)
    }

    return (
        <div className="category">
            <div className="category__item" onClick={() => fetchData(VIDEOS, setVideos)}>Все</div>
            {categories.map(category => (
                <div
                    className="category__item"
                    key={category.id}
                    onClick={() => filter(category.attributes.title)}
                >
                    {category.attributes.title}
                </div>
            ))}
        </div>
    )

}

export default Category