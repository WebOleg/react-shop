import React from 'react'
import { useParams } from 'react-router-dom'
import articlesArray, { getArticlesObject } from 'utils/articlesarray'
import './Article.scss'

const Article = ({ articlesObject = getArticlesObject(articlesArray) }) => {
    const { id } = useParams()
    console.log(articlesObject)
    return (
        <>
            <span>Title:{articlesObject[id].title}</span>
            <p>Description:{articlesObject[id].description}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: articlesObject[id].fulldescription,
                }}
            ></div>
        </>
    )
}

export default Article
