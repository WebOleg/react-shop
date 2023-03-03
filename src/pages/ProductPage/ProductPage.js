import './ProductPage.scss'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { useParams } from 'react-router'
import productsArray, { getProductsObject } from 'utils/productsArray'
import CloseIcon from '@mui/icons-material/Close'

const ProductPage = ({ productsObject = getProductsObject(productsArray) }) => {
    const { id } = useParams()
    const product = productsObject[id]
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [isPopUpOpen, setIsPopUpOpen] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0)
    const handleClick = (i) => {
        setIsPopUpOpen(true)
        setActiveSlide(i)
    }
    const handleClickClose = () => {
        setIsPopUpOpen(false)
    }
    return (
        <>
            {isPopUpOpen && (
                <div className="bgc_div">
                    <div className="zoomphoto">
                        <div className="close">
                            <CloseIcon
                                className="closeicon"
                                onClick={() => handleClickClose()}
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
                                        onClick={handleClick}
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
                <div className="zoomCarousel">
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
                    ></Swiper>
                </div>
                <div className="left">
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
                    >
                        {product.images.map((link, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    onClick={() => handleClick(index)}
                                    src={link}
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {product.images.map((link, index) => (
                            <SwiperSlide key={index}>
                                <img src={link} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="right">
                    <h1>{product.title}</h1>
                    <span>
                        <strong>Price:</strong> {product.price} $
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
                    <p>{product.describe}</p>
                    <div className="line"></div>
                </div>
            </div>
        </>
    )
}

export default ProductPage
