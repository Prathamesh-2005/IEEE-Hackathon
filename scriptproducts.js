document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            title: 'Product 1',
            description: 'Customized Shoes',
            price: '$59.99',
            image: 'download (3).jpeg'
        },
        {
            title: 'Product 2',
            description: 'Cool Headset',
            price: '$29.99',
            image: 'download (4).jpeg'
        },
        {
            title: 'Product 3',
            description: 'Elite Black Edition Watch',
            price: '$39.99',
            image: 'download (5).jpeg'
        },
        {
            title: 'Product 4',
            description: 'Latest Smartphone',
            price: '$79.99',
            image: 'download (7).jpeg'
        },
        {
            title: 'Product 5',
            description: 'Most Stylish Laptop',
            price: '$129.99',
            image: 'download (8).jpeg'
        },
        {
            title: 'Product 6',
            description: 'Stylish Backpack',
            price: '$9.99',
            image: 'download (9).jpeg'
        }
    ];

    const container = document.querySelector('.container');
    const template = document.querySelector('#product-template');

    products.forEach(product => {
        const productCard = template.cloneNode(true);
        productCard.removeAttribute('id');
        productCard.style.display = 'block'; // Make the cloned element visible

        productCard.querySelector('.product-image').src = product.image;
        productCard.querySelector('.product-title').textContent = product.title;
        productCard.querySelector('.product-description').textContent = product.description;
        productCard.querySelector('.product-price').textContent = product.price;

        const addToCartButton = productCard.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            alert(`${product.title} has been added to your cart.`);
        });

        container.appendChild(productCard);
    });

    template.remove();
});
