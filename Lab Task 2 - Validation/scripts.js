function handleSubmit() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  console.log("Clicked Submit", username.value, password.value);

  if (!username.value) {
    console.log("Username is empty");
    username.classList.add("error");
  } else {
    username.classList.remove("error");
  }

  if (!password.value) {
    console.log("Password is empty");
    password.classList.add("error");
  } else {
    password.classList.remove("error");
  }
}
