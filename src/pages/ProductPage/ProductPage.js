import './ProductPage.scss'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { useParams } from 'react-router'
import productsArray, { getProductsObject } from 'utils/productsArray'
import CloseIcon from '@mui/icons-material/Close'
import ProductSlider from 'components/Product/ProductSlider'
import InfoIcon from '@mui/icons-material/Info'
import { Button } from '@mui/material'

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
            {isPopUpOpenImage && (
                <div className="bgc_div">
                    <div className="zoomphoto">
                        <div className="close">
                            <CloseIcon
                                className="closeicon"
                                onClick={() => handleClickCloseImage()}
                            />
                        </div>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{
                                swiper:
                                    thumbsSwiper && !thumbsSwiper.destroyed
                                        ? thumbsSwiper
                                        : null,
                            }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                            initialSlide={activeSlide}
                        >
                            {product.images.map((link, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        onClick={handleClickImage}
                                        src={link}
                                        alt=""
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
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
                    <div className="product_version">
                        <span>
                            <strong>Версия:</strong>
                            <Button
                                onClick={handleClickVersionInfo}
                                variant="outline"
                            >
                                <InfoIcon></InfoIcon>
                            </Button>
                        </span>
                        <Button
                            onClick={() => changePrice(1)}
                            variant="outlined"
                        >
                            Global
                        </Button>
                        <Button
                            onClick={() => changePrice(1.155)}
                            variant="outlined"
                        >
                            UA
                        </Button>
                        <Button
                            onClick={() => changePrice(0.9)}
                            variant="outlined"
                        >
                            e-Sim
                        </Button>
                    </div>
                    <div className="line"></div>
                    <p>{product.describe}</p>
                    <div className="line"></div>
                </div>
            </div>
            {isPopUpOpenVersionInfo && (
                <div className="bgc_div">
                    <div className="zoomphoto version_inf">
                        <div className="close">
                            <CloseIcon
                                variant="outline"
                                className="closeicon"
                                onClick={() => handleClickCloseVersionInfo()}
                            />
                        </div>
                        <h3 className="title">Global</h3>
                        <span>У чому різниця між версіями?</span>
                        <p>
                            • Пристрої Global — це смартфони, що розраховані на
                            міжнародний ринок. Та які підлягають безкоштовному
                            обслуговуванню протягом гарантійного терміну, що
                            вказаний в гарантійному талоні, тільки у мережі
                            Ябко.
                        </p>
                        <p>
                            • Версія e-Sim — це смартфони, що розраховані на
                            ринок США та не містять слотів для SIM-карт.
                            Пристрої e-Sim можна обслуговувати протягом усього
                            гарантійного терміну від Ябко у нашій мережі
                            магазинів. На дану техніку надається гарантія 1 рік
                            від виробника.
                        </p>
                        <p>
                            • Техніку UA можна обслуговувати протягом усього
                            гарантійного терміну безкоштовно у мережі Ябко та у
                            будь-яких авторизованих сервісних центрах в Україні.
                            На дану техніку надається гарантія 1 рік.
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductPage
