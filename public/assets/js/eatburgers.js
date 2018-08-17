document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector('.form');
const changeDevoured = document.querySelector('button.change-devoured');

changeDevoured.addEventListener("click", (e) => {
  let id = e.target.data.id;
  let devoured = e.target.data.devoured;
  // View in console
  console.log(id);
  console.log(devoured);

  let newDevoured = {
    devoured: devoured
  };

// Assign Headers
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'text/json');
// Initialize Request
  const myInit = {
    method: 'PUT',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };
// Create Request
  const myRequest = new Request(`/api/burgers/${id}`);
// Fetch Data from API
  fetch(myRequest, myInit)
  .then((res) => {
    res.json();
    console.log(`Changed devoured to ${res}`);
    location.reload();
  });
});











// DOM Loaded Wrapper -----------------------------
});

//
//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
//
//     var newCat = {
//       name: $("#ca").val().trim(),
//       sleepy: $("[name=sleepy]:checked").val().trim()
//     };
//
//     // Send the POST request.
//     $.ajax("/api/cats", {
//       type: "POST",
//       data: newCat
//     }).then(
//       function() {
//         console.log("created new cat");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
