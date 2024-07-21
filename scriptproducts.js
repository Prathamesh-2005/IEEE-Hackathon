document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            title: 'Product 1',
            description: 'Description of Product 1',
            price: '$19.99',
            image: 'assets/download (3).jpeg' // Image of a watch
        },
        {
            title: 'Product 2',
            description: 'Description of Product 2',
            price: '$29.99',
            image: 'assets/download (4).jpeg' // Image of a pair of shoes
        },
        {
            title: 'Product 3',
            description: 'Description of Product 3',
            price: '$39.99',
            image: 'assets/download (5).jpeg' // Image of a pair of headphones
        }
    ];

    const container = document.querySelector('.container');
    const template = document.querySelector('#product-template');

    products.forEach(product => {
        const productCard = template.cloneNode(true);
        productCard.removeAttribute('id');

        productCard.querySelector('.product-image').src = product.image;
        productCard.querySelector('.product-title').textContent = product.title;
        productCard.querySelector('.product-description').textContent = product.description;
        productCard.querySelector('.product-price').textContent = product.price;

        container.appendChild(productCard);
    });

    template.remove();
});
