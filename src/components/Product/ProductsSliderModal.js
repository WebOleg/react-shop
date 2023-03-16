import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const ProductsSliderModal = ({
    handleClickCloseImage,
    activeSlide,
    isPopUpOpenImage,
    handleClickImage,
    product,
    thumbsSwiper,
}) => {
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
        </>
    )
}

export default ProductsSliderModal
