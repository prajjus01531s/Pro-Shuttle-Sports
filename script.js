let cartCount = 0;
let cartItems = [];

function addToCart(productName, price) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;

  // Add item to cart array
  cartItems.push({ name: productName, price: price, quantity: 1 });

  alert(productName + " added to cart! Total items: " + cartCount);
}

function viewFeatures(productName, features) {
  alert(productName + " features:\n" + features);
}