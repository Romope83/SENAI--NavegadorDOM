// Produtos fictícios para o exemplo
const products = [
  { id: 1, name: "Produto 1", price: 19.99 },
  { id: 2, name: "Produto 2", price: 39.99 },
  { id: 3, name: "Produto 3", price: 29.99 },
];

let cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <span>${product.name} - R$ ${product.price.toFixed(2)}</span>
      <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
    `;
    productList.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
      ${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity} = R$ ${(
      item.price * item.quantity
    ).toFixed(2)}
      <button onclick="removeFromCart(${item.id})">Remover</button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  const cartTotal = document.getElementById("cart-total");
  cartTotal.innerText = calculateTotal().toFixed(2);
}

function calculateTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function clearCart() {
  cart = [];
  renderCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  const total = calculateTotal().toFixed(2);
  alert(`Compra realizada com sucesso! Total: R$ ${total}`);
  clearCart(); // Esvazia o carrinho após a compra
}

renderProducts();
renderCart();
