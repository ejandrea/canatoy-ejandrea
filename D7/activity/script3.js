let total = 0;
const checkOutList = [
  { id: "product1", count: 0, price: 10 },
  { id: "product2", count: 0, price: 15 },
  { id: "product3", count: 0, price: 20 },
];

function updateTotal() {
  total = checkOutList.reduce((acc, item) => acc + item.count * item.price, 0);
  totalParagraph.innerHTML = `Total: $${total}.00`;
  checkIfCartIsEmpty();
}

const wrapper = document.querySelector("#wrapper");
const totalParagraph = document.querySelector("#total");
const cartItems = document.querySelector("#yourCart");
const product1 = document.querySelector("#product1");
const product2 = document.querySelector("#product2");
const product3 = document.querySelector("#product3");
const checkout = document.querySelector("#checkout");

product1.addEventListener("click", () => handleAddProduct(product1.id));
product2.addEventListener("click", () => handleAddProduct(product2.id));
product3.addEventListener("click", () => handleAddProduct(product3.id));
checkout.addEventListener("click", handleCheckout);

function handleCartItemText(item) {
  const word = item.id.slice(0, -1);
  const number = item.id.slice(-1);
  const finalWord = word.charAt(0).toUpperCase() + word.slice(1);

  return `${finalWord} ${number}`;
}

function handleAddCartItem(item) {
  const existingItem = document.querySelector(`#text-${item.id}`);
  const count = item.count;

  if (!existingItem) {
    const cartItemContainer = document.createElement("div");
    cartItemContainer.className =
      "d-flex align-items-center justify-content-between w-100 mb-2";

    const cartItemText = document.createElement("li");
    cartItemText.id = `text-${item.id}`;
    cartItemText.className = "list-unstyled";
    cartItemText.innerHTML = handleCartItemText(item);

    const cartItemValue = document.createElement("span");
    cartItemValue.id = `pill-${item.id}`;
    cartItemValue.innerHTML = count;
    cartItemValue.className = "badge rounded-pill text-bg-secondary text-black";

    const cartItemValueRemove = document.createElement("button");
    cartItemValueRemove.className = "btn btn-danger";
    cartItemValueRemove.innerHTML = "x";
    cartItemValueRemove.addEventListener("click", () => {
      cartItems.removeChild(cartItemValueRemove.parentNode);
      item.count = 0;
      updateTotal();
    });

    cartItemContainer.appendChild(cartItemValue);
    cartItemContainer.appendChild(cartItemText);
    cartItemContainer.appendChild(cartItemValueRemove);
    cartItems.appendChild(cartItemContainer);
  } else {
    const cartItemValue = document.querySelector(`#pill-${item.id}`);
    cartItemValue.innerHTML = count;
  }
}

function checkIfCartIsEmpty() {
  const isCartEmpty = checkOutList.every(item => item.count === 0);
  checkout.disabled = isCartEmpty;
}

function handleAddProduct(productId) {
  checkOutList.forEach(item => {
    if (productId === item.id) {
      item.count++;
      total += item.price;
      handleAddCartItem(item);
    }
  });

  updateTotal();

  const successAlert = document.querySelector(".alert");
  if (successAlert) {
    successAlert.remove();
  }
}

function handleCheckout() {
  const successAlert = document.createElement("div");
  successAlert.innerHTML = `Checkout Total $${total}.00!`;
  successAlert.role = "alert";
  successAlert.className = "alert alert-success w-75 w-md-50";

  wrapper.appendChild(successAlert);

  cartItems.innerHTML = "";
  checkOutList.forEach(item => {
    item.count = 0;
  });
  checkout.disabled = true;
  total = 0;
  updateTotal();
}

// Initial
updateTotal();
