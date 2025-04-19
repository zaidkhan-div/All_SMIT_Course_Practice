let users = JSON.parse(localStorage.getItem('User')) || [];

var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

let signup_name = document.getElementById("signup-name");
let signup_email = document.getElementById("signup-email");
let signup_password = document.getElementById("signup-password");
let signup_btn = document.getElementById("signup-btn");

signup_btn.addEventListener("click", function signup() {
  let name = signup_name.value;
  let email = signup_email.value;
  let password = signup_password.value;

  let emailValid = emailPattern.test(email);
  if (emailValid === false) {
    throw new Error("Email Validation Error");
  }

  let obj = {
    name: name,
    email: email,
    password: password,
  };
  users.push(obj);
  localStorage.setItem("User", JSON.stringify(users));
});
console.log(users);


let signin_email = document.getElementById('signin-email');
let signin_password = document.getElementById('signin-password');
let signin_btn = document.getElementById('signin-btn');

signin_btn.addEventListener('click',function signin(){
    
})