document.addEventListener("DOMContentLoaded", () => {

// Globals -----------------------------------------------
const form = document.querySelector('.form');
const button = document.querySelector('button.devour');

// Update ---------------------------------
button.addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-id");
  let devoured = e.target.getAttribute("data-devoured");

  let newDevoured = {
    devoured: devoured
  };
// Test
  // console.log(newDevoured);
  // console.log(id);

  function update() {
    fetch(`/api/burgers/${id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDevoured)
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(`Changed devoured to ${data}`);
      // location.reload();
    })
    .catch(err => console.log(err));
  }

  update();

});

// Create ---------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let burgerName = document.getElementById("burgerName");
  let devoured = document.querySelector("[name=newburger]:checked");

  let newBurger = {
    burger_name: burgerName.value,
    devoured: devoured.value
  }
  // Test
  console.log(newBurger);
  const url = `/api/burgers`;

  const newData = {
    method: "POST",
    headers: new Headers(),
    body: newBurger
  }

  function create() {
    fetch(url, newData)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  create();

});

// DOM Loaded Wrapper -----------------------------
});
