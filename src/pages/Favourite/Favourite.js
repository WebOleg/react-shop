import React from 'react'
import FavouriteList from 'components/FavouriteList/FavouriteList'

const Favourite = ({ productsLike, toggleLike }) => {
    console.log(productsLike)
    return (
        <div>
            <div> Favourite</div>
            <FavouriteList
                toggleLike={toggleLike}
                productsLike={productsLike}
            ></FavouriteList>
        </div>
    )
}

export default Favourite
