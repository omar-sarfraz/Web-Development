$(function () {
  loadProducts();
});

function loadProducts() {
  $.ajax({
    method: "get",
    url: "https://usman-fake-api.herokuapp.com/api/products",
    success: addProducts,
  });
}

function addProducts(products) {
  let elements = "";
  products.map((item) => {
    elements += `<div class="card mb-2" id='${item._id}'><div class="card-header">${item.department}</div><div class="card-body"><h5 class="card-title">${item.name}</h5><p class="card-text">${item.description}</p><button class="btn btn-danger" data-id='${item._id}'>Delete</button></div></div>`;
  });

  $("#products").html(elements);
  let eles = $(".btn-danger");
  //   console.log(eles);
  eles.map((item, e) => {
    e.onclick = deleteProduct(e.dataset.id);
  });
}

function deleteProduct(id) {
  console.log("Delete", id);
}
