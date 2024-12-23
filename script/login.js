let u_name = document.getElementById("username");
let u_pass = document.getElementById("password");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let user = u_name.value;
  let pass = u_pass.value;

  let userProm = authUser(user, pass);
});

function authUser(user, pass) {
  let url = "https://dummyjson.com/auth/login";
  let prom = fetch(url);
}
