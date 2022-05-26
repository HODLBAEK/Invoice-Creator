const buttonWash = document.querySelector("#wash");
const buttonLawn = document.querySelector("#lawn");
const buttonWeed = document.querySelector("#weed");

const list = document.querySelector("#service-list");
const notes = document.querySelector("#notes:first-child");
const totalEl = document.querySelector("#total-dollar");

const sendInvoice = document.querySelector("#send-btn");

//! array to hold onclick events
let arr = [];

//* onclick events
buttonWash.addEventListener("click", () => {
  const service = { service: "Wash car", cost: 10 };
  arr.push(service);
  addService(service);
});
buttonLawn.addEventListener("click", () => {
  const service = { service: "Mow lawn", cost: 20 };
  arr.push(service);
  addService(service);
});
buttonWeed.addEventListener("click", () => {
  const service = { service: "Clean house", cost: 30 };
  arr.push(service);
  addService(service);
});

//* adding element and calculating total when click is initiated
function addService(serviceObj) {
  const service = document.createElement("article");
  service.setAttribute("class", "service-item");
  service.innerHTML = `<div class="container">
  <h2>${serviceObj.service}</h2>
  </div>
  <div class="container"><h2>$ ${serviceObj.cost}</h2>
  </div>`;
  list.appendChild(service);

  const total = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue.cost,
    0
  );
  totalEl.textContent = total;
}

//* sending invoice

function reset() {
  arr = [];
  totalEl.textContent = "";
  list.innerHTML = "";
}
sendInvoice.addEventListener("click", reset);
