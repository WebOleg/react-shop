const productsArray = [
    {
        id: 1,
        image: '/images/IphoneGreen.jpg',
        title: 'Iphone X',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 350,
        type: 'phone',
        capacity: 564,
    },

    {
        id: 2,
        image: '/images/IphonePurple.jpg',
        title: 'Iphone Xr',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 300,
        type: 'phone',
        capacity: 564,
    },

    {
        id: 3,
        image: '/images/IphoneWhite.jpg',
        title: 'Iphone 14',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 1500,
        type: 'phone',
        capacity: 564,
    },
]
export default productsArray

export const getProductsObject = (array) =>
    array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )
