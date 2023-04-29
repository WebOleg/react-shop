import React, { useState } from 'react'
import PageTitle from 'components/PageTitle/PageTitle'
import reviewsArray from 'utils/reviewsArray'
import './Reviews.scss'
import { Button, Card, TextField } from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize'

const Reviews = () => {
    const [newReview, setNewReview] = useState({ name: '', text: '' })
    const [reviews, setReviews] = useState(reviewsArray)
    const handleName = (event) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: event.target.value,
        }))
    }
    const handleText = (event) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: event.target.value,
        }))
    }
    const onSend = () => {
        if (newReview.name === '' || newReview.text === '') {
            alert('The field is empty')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({ name: '', text: '' })
        }
    }
    return (
        <>
            <PageTitle>Reviews</PageTitle>
            <div className="reviews_container">
                {reviews.map(({ name, text }, index) => (
                    <Card
                        key={index}
                        variant="outlined"
                        className="reviews_item"
                    >
                        <div className="review_title">{name}</div>
                        <p>{text}</p>
                    </Card>
                ))}
                <form>
                    <h3>Please leave a review</h3>
                    <div className="top">
                        <TextField
                            onChange={handleName}
                            value={newReview.name}
                            id="outlined-basic"
                            label="Your name"
                            variant="outlined"
                            sx={{ marginBottom: '20px', width: 100 + '%' }}
                        />
                        <TextareaAutosize
                            onChange={handleText}
                            value={newReview.text}
                            aria-label="empty textarea"
                            placeholder="Your review"
                            style={{ width: 100 + '%' }}
                            minRows={5}
                        />
                    </div>
                    <div className="bottom">
                        <Button onClick={onSend} variant="outlined">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Reviews
