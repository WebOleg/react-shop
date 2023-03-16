import './ProductPage.scss'
import React, { useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { useParams } from 'react-router'
import productsArray, { getProductsObject } from 'utils/productsArray'
import ProductSlider from 'components/Product/ProductSlider'
import VersionInfo from 'components/Product/VersionInfo'
import ProductsSliderModal from 'components/Product/ProductsSliderModal'
import ProductVersion from 'components/Product/ProductVersion'

const ProductPage = ({ productsObject = getProductsObject(productsArray) }) => {
    const { id } = useParams()
    const product = productsObject[id]
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [isPopUpOpenImage, setIsPopUpOpenImage] = useState(false)
    const [isPopUpOpenVersionInfo, setIsPopUpOpenVersionInfo] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0)
    const [productPrice, setProductPrice] = useState(product.price)
    const handleClickImage = (i) => {
        setIsPopUpOpenImage(true)
        setActiveSlide(i)
    }
    const handleClickCloseImage = () => {
        setIsPopUpOpenImage(false)
    }
    const handleClickVersionInfo = () => {
        setIsPopUpOpenVersionInfo(true)
    }
    const handleClickCloseVersionInfo = () => {
        setIsPopUpOpenVersionInfo(false)
    }
    const changePrice = (k) => {
        setProductPrice(product.price * k)
    }
    return (
        <>
            <ProductsSliderModal
                handleClickCloseImage={handleClickCloseImage}
                activeSlide={activeSlide}
                isPopUpOpenImage={isPopUpOpenImage}
                handleClickImage={handleClickImage}
                product={product}
                thumbsSwiper={thumbsSwiper}
            />
            <div className="product">
                <ProductSlider
                    product={product}
                    handleClick={handleClickImage}
                    thumbsSwiper={thumbsSwiper}
                    setThumbsSwiper={setThumbsSwiper}
                />
                <div className="right">
                    <h1>{product.title}</h1>
                    <span>
                        <strong>Price:</strong> {productPrice} $
                    </span>
                    <div className="line"></div>
                    <span>
                        <strong>Capacity:</strong> {product.capacity} GB
                    </span>
                    <div className="line"></div>
                    <span>
                        <strong>Color:</strong> {product.color}
                    </span>
                    <div className="line"></div>
                    <ProductVersion
                        handleClickVersionInfo={handleClickVersionInfo}
                        changePrice={changePrice}
                    />
                    <div className="line"></div>
                    <p>{product.describe}</p>
                    <div className="line"></div>
                </div>
            </div>
            <VersionInfo
                handleClickCloseVersionInfo={handleClickCloseVersionInfo}
                isPopUpOpenVersionInfo={isPopUpOpenVersionInfo}
            />
        </>
    )
}

export default ProductPage
