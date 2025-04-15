"use strict";

const btnLogin = document.querySelector(".login-button");
const btnSignup = document.querySelector(".signup-button");

const loginUserName = document.querySelector(".username");
const loginPassword = document.querySelector(".password");
const signUpName = document.querySelector(".name");
const signUpPassword = document.querySelector(".password");
const signUpConfirmPassword = document.querySelector(".confirm-password");

let username = "";
let password = "";

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  username = loginUserName.value;
  password = loginPassword.value;
  console.log(username);
  console.log(password);
  const data = {
    username: username,
    password: password,
  };
  const url = "http://localhost:8090/students";
  fetch(url, {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json", // Specify JSON format
    },
    body: JSON.stringify(data), // Convert data object to JSON string
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Convert response to JSON
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
