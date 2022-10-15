import React from 'react'
import { Link } from 'react-router-dom'
import articlesArray from 'utils/articlesarray'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <h2>Hello Js</h2>
            <h2>Hello Home</h2>
            {articlesArray.map(({ id, title, description }) => (
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to={`/articles/${id}`}>Read More</Link>
                </div>
            ))}
        </>
    )
}

export default Home
