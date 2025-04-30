const products = [
  {
    title: "Зажим концевой натяжной",
    code: "98098",
    usage: "прочие части",
    minQty: 100,
    price: "350 BYN",
    img: "../assets/product1.png"
  },
  {
    title: "Зажим концевой натяжной",
    code: "98098",
    usage: "прочие части",
    minQty: 100,
    price: "350 BYN",
    img: "../assets/product1.png"
  },
  {
    title: "Зажим концевой натяжной",
    code: "98098",
    usage: "прочие части",
    minQty: 100,
    price: "350 BYN",
    img: "../assets/product1.png"
  },
  {
    title: "Зажим концевой натяжной",
    code: "98098",
    usage: "прочие части",
    minQty: 100,
    price: "350 BYN",
    img: "../assets/product1.png"
  },
  {
    title: "Зажим концевой натяжной",
    code: "98098",
    usage: "прочие части",
    minQty: 100,
    price: "350 BYN",
    img: "../assets/product1.png"
  },
  {
    title: "Зажим концевой натяжной",
    code: "98098",
    usage: "прочие части",
    minQty: 100,
    price: "350 BYN",
    img: "../assets/product1.png"
  },
  {
    title: "Зажим концевой натяжной",
    code: "98098",
    usage: "прочие части",
    minQty: 100,
    price: "350 BYN",
    img: "../assets/product1.png"
  },
  {
    title: "Зажим концевой натяжной",
    code: "98098",
    usage: "прочие части",
    minQty: 100,
    price: "350 BYN",
    img: "../assets/product1.png"
  },
  {
    title: "Зажим концевой натяжной",
    code: "98098",
    usage: "прочие части",
    minQty: 100,
    price: "350 BYN",
    img: "../assets/product1.png"
  },
];

const catalog = document.getElementById("catalog");

products.forEach(product => {
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
    <button class="card-btn btn">Добавить в корзину &nbsp
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M24.4796 6.00951H5.92634L5.54806 3.85389C5.3149 2.52693 4.29317 1.48893 2.98923 1.25429L1.61776 1.00837C1.33185 0.956555 1.05907 1.15066 1.00817 1.4415C0.957474 1.73255 1.14794 2.01023 1.43386 2.06204L2.81046 2.30796C3.67907 2.46467 4.35906 3.15688 4.51299 4.0411L6.37296 14.7226C6.59257 16.0007 7.68347 16.933 8.95806 16.9317H19.9922C21.1515 16.9353 22.1752 16.1628 22.5092 15.0329L24.9787 6.69942C25.0245 6.53686 24.9956 6.36177 24.8999 6.22346C24.8 6.08953 24.6446 6.01055 24.4796 6.00951ZM21.5055 14.7172C21.3072 15.3958 20.6929 15.8601 19.9976 15.8565H8.9634C8.19803 15.8586 7.54287 15.298 7.41336 14.53L6.11557 7.07383H23.7754L21.5055 14.7172Z" fill="white" stroke="white"/>
      <path d="M8.90048 19.1807C7.32171 19.1807 6.04199 20.4834 6.04199 22.0905C6.04199 23.6975 7.32171 25.0002 8.90048 25.0002C10.479 25.0002 11.7588 23.6975 11.7588 22.0905C11.7571 20.4842 10.4784 19.1823 8.90048 19.1807ZM8.90048 23.9304C7.90216 23.9304 7.09286 23.1066 7.09286 22.0905C7.09286 21.0743 7.90216 20.2504 8.90048 20.2504C9.8986 20.2504 10.7079 21.0743 10.7079 22.0905C10.7079 23.1066 9.8986 23.9304 8.90048 23.9304Z" fill="white" stroke="white"/>
      <path d="M19.9347 19.1807C18.3559 19.1807 17.0762 20.4834 17.0762 22.0905C17.0762 23.6975 18.3559 25.0002 19.9347 25.0002C21.5132 25.0002 22.7929 23.6975 22.7929 22.0905C22.7913 20.4842 21.5126 19.1823 19.9347 19.1807ZM19.9347 23.9304C18.9363 23.9304 18.127 23.1066 18.127 22.0905C18.127 21.0743 18.9363 20.2504 19.9347 20.2504C20.9328 20.2504 21.7421 21.0743 21.7421 22.0905C21.7421 23.1066 20.9328 23.9304 19.9347 23.9304Z" fill="white" stroke="white"/>
    </svg>
    </button>
  `;


  const button = card.querySelector(".card-btn");
  button.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину");
  });


  catalog.appendChild(card);
});
