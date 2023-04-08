import React from 'react'
import FavouriteList from 'components/FavouriteList/FavouriteList'
import PageTitle from 'components/PageTitle/PageTitle'

const Favourite = ({ productsLike, toggleLike }) => {
    console.log(productsLike)
    return (
        <div>
            <PageTitle>Favorite</PageTitle>
            <FavouriteList
                toggleLike={toggleLike}
                productsLike={productsLike}
            ></FavouriteList>
        </div>
    )
}

export default Favourite
