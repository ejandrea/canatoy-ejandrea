const displayProductList = async () => {
  const productContainer = document.querySelector("#productContainer");

  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=20");

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    const data = await response.json();

    let html = "";

    data.forEach(product => {
      html += `<div class="col-lg-3 col-md-4 col-12">
          <div class="card">
            <div class="card-body d-flex justify-content-center flex-column">
              <div class="d-flex justify-content-center mb-4">
                <img src="${product.image}" width="150" height="175"/>
              </div>

              <h2 class="card-title h2">${product.title}</h2>
              <p class="text-muted"><b>$${product.price}</b></p>
              <p class="lh-lg card-desc">${product.description}</p>
            </div>
          </div>
        </div>`;
    });

    productContainer.innerHTML = html;
  } catch (error) {
    productContainer.innerHTML = "An error occurred while fetching data.";
    console.error(error);
  }
};

displayProductList();
