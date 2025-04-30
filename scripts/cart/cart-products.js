const cartContainer = document.getElementById("cart");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartContainer.innerHTML = "<p style='text-align:center;'>Корзина пуста</p>";
} else {
  cart.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <img src="${product.img}" alt="${product.title}">
          <p class="product-code caption">код товара: ${product.code}</p>
          <h6 class="product-title">${product.title}</h6>
          <div class="product-info">
            <div class="product-descr">
              <p class="product-property">Применение: ${product.usage}</p>
              <p class="product-property">Мин количество: ${product.minQty} штук</p>
            </div>
            <div class="product-price">${product.price}</div>
          </div>
        `;
    cartContainer.appendChild(card);
  });
}