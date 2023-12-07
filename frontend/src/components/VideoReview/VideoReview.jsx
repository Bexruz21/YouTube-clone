import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { REVIEWS_OF_VIDEO } from '../../utils/urls'
import { fetchData } from '../../utils/functions'
import User from "../../static/images/user.png"


function VideoReview({ id }) {
    const [user] = useState(JSON.parse(localStorage.getItem("user")))
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState("")
    const navigate = useNavigate()

    const loadReviews = () => {
        fetchData(REVIEWS_OF_VIDEO.replace("videoId", id), setReviews)
    }

    async function addReview(e) {
        e.preventDefault();
        if (!user) {
          navigate("/sign-in");
          return;
        }
        if (!review) {
          alert("Заполните поля");
          return;
        }
        try {
          await axios.post("http://localhost:1337/api/reviews", {
            data: {
              customer: user,
              video: id,
              body: review,
            },
          });
          setReview("");
          loadReviews();
        } catch (error) {
          console.error("Error adding review:", error);
        }
      }
      

    useEffect(() => loadReviews(), [])

    return (
        <>
            <h2>{reviews.length} комментарии</h2>
            {user ? (
                <div className="detail__form">
                <div className="detail__form__author">
                    <img width='40px' src={user.imageUrl} alt="" />
                </div>
                <form onSubmit={e => addReview(e)} className='detail__form__input'>
                    <input
                        type="text"
                        placeholder='Введите комментарий'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <div className="detail__form__input-buttons">
                        <button type='button' className='detail__form__input-cancel' onClick={() => setReview('')}>Отмена</button>
                        <button className='detail__form__input-submit'>Оставить комментарий</button>
                    </div>
                </form>
            </div>
            ): ''}
            <div className="detail__comments">
                {reviews && reviews.map(review => (
                    <div className="detail__comment" key={review.id}>
                        <div className="detail__comment__image">
                            <img width='40px' src={review.attributes.customer.data.attributes.imageUrl} alt="" />
                        </div>
                        <div className='detail__comment__content'>
                            <div className='detail__comment__content-header'>
                                <p className='detail__comment__author'>@{review.attributes.customer.data.attributes.username}</p>
                                <p className='detail__comment__date'>{(review.attributes.publishedAt).substr(0, 10)}</p>
                            </div>
                            <p>{review.attributes.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default VideoReview