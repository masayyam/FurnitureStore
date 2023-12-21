let form = document.getElementById("reg-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  let firstName = document.getElementById("rfname").value;
  let lastName = document.getElementById("rlname").value;
  let email = document.getElementById("remail").value;
  let password = document.getElementById("rpassword").value;
  if (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    alert("Please fill out all the fields first");
  } else {
    alert(
      `first name is ${firstName}, Last name is ${lastName}, Email is ${email}`
    );
  }
});
