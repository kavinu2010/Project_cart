let container = document.getElementById("cardContainer");

let url = "https://dummyjson.com/products";
let dataProm = fetchData(url);

async function fetchData(url) {
  let prom = fetch(url);
  return await prom;
}

dataProm
  .then((data) => {
    return data.json();
  })
  .then((dataJ) => {
    dataJ.products.forEach((element) => {
      updateProductUI(element);
    });
  });

function updateProductUI(obj) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML = ` 
        <div class="left-c">
          <img src="${obj.thumbnail}" alt="" class="img-c" />
        </div>

        <div class="right-c">
          <div class="right-c-child">
            <h3>${obj.title} </h3>
            <p>${obj.price}</p>
          </div>
          <div class="right-c-child">
            <p>
               ${obj.description}
            </p>
          </div>
          <div class="right-c-child">
            <button class="btn">Add to cart</button>
          </div>
        </div>
      
`;
  container.appendChild(card);
}
