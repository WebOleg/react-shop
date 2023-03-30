import React from 'react'
import { Link } from 'react-router-dom'
import articlesArray from 'utils/articlesarray'
import Title from 'components/Title/Title'

const Home = () => {
    return (
        <>
            <Title
                target={'_blank'}
                url="https://rozetka.com.ua/ua/"
                link={'Rozetka'}
                text={'Hello'}
                title={'Home'}
            />
            <Title
                target={'_self'}
                url="https://www.google.com.ua/"
                link={'Google'}
                text={'Hi'}
                title={'Js'}
            />
            <h1>Home</h1>
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
