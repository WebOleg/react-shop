const productsArray = [
    {
        id: 1,
        image: '/images/IphoneGreen.jpg',
        title: 'Iphone X',
        fullDescription:
            'Купити iPhone 14 Pro Max чи ні? Одвічне питання, що турбує користувачів після виходу чергової новинки від Apple. Та команда Ябко має відповідь для тих, хто давно мріяв оновити смартфон на флагман від кращих розробників з долини Купертіно — однозначно ТАК. А зробити це можливо в інтернет-магазині Ябко у кілька кліків оформивши передзамовлення на iPhone 14 Pro Max. Творці вкотре оснастили новинки 2022 року найсучаснішою технологічною начинкою, і можна сміливо сказати, що на нас чекає вдало пропрацьований ексклюзивний дизайн та вкотре збільшені показники автономності. Флагманський новий Айфон 14 Про Макс справді зможе здивувати навіть найвибагливіших користувачів. Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 1000,
        type: 'phone',
        capacity: 564,
        category: 'apple',
        color: 'Green',
        images: [
            '/images/iphone_green1.webp',
            '/images/iphone_green2.webp',
            '/images/iphone_green3.webp',
            '/images/iphone_green2.webp',
        ],
    },

    {
        id: 2,
        image: '/images/samsung2.jpeg',
        title: 'Samsung Galaxy S22',
        fullDescription:
            'Купити iPhone 14 Pro Max чи ні? Одвічне питання, що турбує користувачів після виходу чергової новинки від Apple. Та команда Ябко має відповідь для тих, хто давно мріяв оновити смартфон на флагман від кращих розробників з долини Купертіно — однозначно ТАК. А зробити це можливо в інтернет-магазині Ябко у кілька кліків оформивши передзамовлення на iPhone 14 Pro Max. Творці вкотре оснастили новинки 2022 року найсучаснішою технологічною начинкою, і можна сміливо сказати, що на нас чекає вдало пропрацьований ексклюзивний дизайн та вкотре збільшені показники автономності. Флагманський новий Айфон 14 Про Макс справді зможе здивувати навіть найвибагливіших користувачів.',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 300,
        type: 'phone',
        capacity: 564,
        category: 'samsung',
        images: [
            '/images/iphone_green1.webp',
            '/images/iphone_green2.webp',
            '/images/iphone_green3.webp',
            '/images/iphone_green2.webp',
        ],
    },

    {
        id: 3,
        image: '/images/IphoneWhite.jpg',
        title: 'Iphone 14',
        fullDescription:
            'Купити iPhone 14 Pro Max чи ні? Одвічне питання, що турбує користувачів після виходу чергової новинки від Apple. Та команда Ябко має відповідь для тих, хто давно мріяв оновити смартфон на флагман від кращих розробників з долини Купертіно — однозначно ТАК. А зробити це можливо в інтернет-магазині Ябко у кілька кліків оформивши передзамовлення на iPhone 14 Pro Max. Творці вкотре оснастили новинки 2022 року найсучаснішою технологічною начинкою, і можна сміливо сказати, що на нас чекає вдало пропрацьований ексклюзивний дизайн та вкотре збільшені показники автономності. Флагманський новий Айфон 14 Про Макс справді зможе здивувати навіть найвибагливіших користувачів.',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 1500,
        type: 'phone',
        capacity: 564,
        category: 'apple',
        images: [
            '/images/iphone_green1.webp',
            '/images/iphone_green2.webp',
            '/images/iphone_green3.webp',
            '/images/iphone_green2.webp',
        ],
    },

    {
        id: 4,
        image: '/images/samsung.jpeg',
        title: 'Samsung Galaxy S22',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 450,
        type: 'phone',
        capacity: 64,
        category: 'samsung',
        images: [
            '/images/iphone_green1.webp',
            '/images/iphone_green2.webp',
            '/images/iphone_green3.webp',
            '/images/iphone_green2.webp',
        ],
    },

    {
        id: 5,
        image: '/images/samsung2.jpeg',
        title: 'Samsung Galaxy S22',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 800,
        type: 'phone',
        capacity: 128,
        category: 'samsung',
        images: [
            '/images/iphone_green1.webp',
            '/images/iphone_green2.webp',
            '/images/iphone_green3.webp',
            '/images/iphone_green2.webp',
        ],
    },

    {
        id: 6,
        image: '/images/Iphone-blue.jpeg',
        title: 'Iphone 14 plus',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 1800,
        type: 'phone',
        capacity: 264,
        category: 'apple',
        images: [
            '/images/iphone_green1.webp',
            '/images/iphone_green2.webp',
            '/images/iphone_green3.webp',
            '/images/iphone_green2.webp',
        ],
    },

    {
        id: 7,
        image: '/images/samsung.jpeg',
        title: 'Samsung Galaxy S22',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 750,
        type: 'phone',
        capacity: 564,
        category: 'samsung',
        images: [
            '/images/iphone_green1.webp',
            '/images/iphone_green2.webp',
            '/images/iphone_green3.webp',
            '/images/iphone_green2.webp',
        ],
    },

    {
        id: 8,
        image: '/images/xiomi.jpeg',
        title: 'Xiaomi 12T Pro 8',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 500,
        type: 'phone',
        capacity: 564,
        category: 'xiomi',
        images: [
            '/images/iphone_green1.webp',
            '/images/iphone_green2.webp',
            '/images/iphone_green3.webp',
            '/images/iphone_green2.webp',
        ],
    },

    {
        id: 9,
        image: '/images/IphoneWhite.jpg',
        title: 'Iphone 14',
        describe:
            'Apple iPhone X – воплощение лучших инновационных решений. Абсолютно новый дизайн с переосмысленной системой управления. Безрамочный дизайн выводит опыт использования на новый уровень. Корпус из стекла и металла. Совершенное аппаратное ядро, благодаря мощнейшей внутренней 64 битной архитектуре. Разительно улучшенная самая популярная в мире мобильная камера. Именно таким видит свой флагманский смартфон компания Apple в 2017 году.',
        price: 1550,
        type: 'phone',
        capacity: 128,
        category: 'apple',
        images: [
            '/images/iphone_green1.webp',
            '/images/iphone_green2.webp',
            '/images/iphone_green3.webp',
            '/images/iphone_green2.webp',
        ],
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
