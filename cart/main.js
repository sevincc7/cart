const products = [
    {
        title: 'Telefon',
        price: 120.00 
    },
    {
        title: 'Ari Pods Pro',
        price: 60.00 
    }
];

function renderProducts() {
    const productList = document.getElementById('productList')
    products.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.backgroundColor='red'
        div.style.
        div.innerHTML = `
            <h2>Mehsulun adi: ${item.title}</h2>
            <p>Qiymet: $${item.price}</p>
            <button onclick="addToCart(${index})">Add to cart</button>
        `;
        productList.appendChild(div);
    });
}
function addToCart(productIndex) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(products[productIndex]);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    localStorage.removeItem('cart');

    displayCart();
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartList = document.getElementById('cart');
    const totalItemCount = document.getElementById('totalCount');
    const totalPrice = document.getElementById('totalPrice');
    cartList.innerHTML = '';

    let itemCount = 0;
    let cartPrice = 0;

    if (cart) {
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Sebetden sil';
            removeButton.onclick = () => removeFromCart(index);
            li.textContent = `${item.title} - $${item.price}`;
            
            
            li.appendChild(removeButton);
            cartList.appendChild(li);

            itemCount++;
            cartPrice += item.price;
        });
    }

    totalItemCount.textContent = 'toplam eded' + ' ' + itemCount;
    totalPrice.textContent = 'toplam qiymet' + ' ' + cartPrice;
}

window.onload = () => {
    renderProducts();
    displayCart();
}; 