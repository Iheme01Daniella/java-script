document.addEventListener("DOMContentLoaded", function (){
  AOS.init({
    duration: 1000 // ✅ Reduced animation duration to 500ms
  });
  let products = [
    { item: "bag", price: "$35", color: "green", image: "./image/bag.png" },
    { item: "backpack", price: "$30", color: "orange", image: "./image/backpack.png" },
    { item: "mouse", price: "$350", color: "white", image: "./image/computer mouse.jpg" },
    { item: "fan", price: "$750", color: "brown", image: "./image/fan.jpg" },
    { item: "airpods", price: "$550", color: "black", image: "./image/airpod.png" },
    { item: "pen", price: "$50", color: "blue", image: "./image/pen.jpg" },
  ];

  let container = document.querySelector(".row");
  container.innerHTML = "";

  const aosAnimations = ['fade-left', 'fade-right', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out'];

  products.forEach((product, index) => {
    let div = document.createElement("div");
    div.className = "col-12 col-sm-6 col-md-4 mb-4";
    div.setAttribute('data-aos', aosAnimations[index % aosAnimations.length]); // Rotate animations

    div.innerHTML = `
      <div class="card h-100 shadow ">
        <img src="${product.image}" class="card-img-top mx-auto img-fluid d-block" alt="${product.item}" style="height: 200px; object-fit: contain; ">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title text-capitalize">${product.item}</h5>
          <p><strong>${product.price}</strong></p>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="text-center">
            <a href="#" class="btn btn-primary w-50">Buy</a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
});
