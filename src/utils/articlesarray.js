const articlesArray = [
    {
        id: 1,
        title: 'Article 1',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, aut cum dolor rem mollitia perspiciatis quaerat aspernatur alias voluptatibus, quo libero numquam eaque voluptatem odio molestias vel accusamus architecto aliquid!',
        fulldescription: '<div class="red">Article 1 full description</div>',
    },
    {
        id: 2,
        title: 'Article 2',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, aut cum dolor rem mollitia perspiciatis quaerat aspernatur alias voluptatibus, quo libero numquam eaque voluptatem odio molestias vel accusamus architecto aliquid!',
        fulldescription: '<div class="red">Article 1 full description</div>',
    },
    {
        id: 3,
        title: 'Article 3',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, aut cum dolor rem mollitia perspiciatis quaerat aspernatur alias voluptatibus, quo libero numquam eaque voluptatem odio molestias vel accusamus architecto aliquid!',
        fulldescription: '<div class="red">Article 1 full description</div>',
    },
]

export default articlesArray

export const getArticlesObject = (array) =>
    array.reduce(
        (obj, article) => ({
            ...obj,
            [article.id]: article,
        }),
        {}
    )
