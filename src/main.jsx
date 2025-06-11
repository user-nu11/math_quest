import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

document.addEventListener("DOMContentLoaded", function() {
  var create = document.getElementById("linkCreateAccount");
  var haveAcc = document.getElementById("linkLogin");
  var formLogin = document.getElementById("Login");
  var formCreateAcc = document.getElementById("CreateAccount");
  var loginButton = document.getElementById("loginButton");
  var regButton = document.getElementById("registerButton");

  create.addEventListener("click", function(e) {
    e.preventDefault();

    hide(formLogin);
    show(formCreateAcc);
  });

  haveAcc.addEventListener("click", function(e) {
    e.preventDefault();

    show(formLogin);
    hide(formCreateAcc);
  });

  loginButton.addEventListener("click", function(e) {

   $('#check').on("click", function(){
  let valid = true;
  $('[required]').each(function() {
    if ($(this).is(':invalid') || !$(this).val()) valid = false;
  })
  if (!valid) {
    alert("error please fill all fields!");
  } 
  if (valid) {
    alert('valid');
    hide(formLogin);
    hide(formCreateAcc);
    show.getElementById("game");
  }

  })
  e.preventDefault();
  });

  regButton.addEventListener("click", function(e) {

    $('#check').on("click", function(){
    let valid = true;
    $('[required]').each(function() {
     if ($(this).is(':invalid') || !$(this).val()) valid = false;
    })
    if (!valid) {
      alert("error please fill all fields!");
    } 
    if(valid) {
      alert('valid');
      show(formLogin);
      hide(formCreateAcc);
    }
   })
  e.preventDefault();
  });


});

function hide(elem) {
    elem.classList.add("form--hidden");
    elem.classList.remove("form--unhidden");
}

function show(elem) {
  elem.classList.add("form--unhidden");
  elem.classList.remove("form--hidden");
}
