'use strict';
/*
	WEB 230 Winter 2022
	Assignment 7
	{your name, student number, and date here}
*/

document.addEventListener("DOMContentLoaded", function () {

	let form = document.querySelector("form");
  
	document.querySelector("input[name='password']").value = "monkey";
	document.getElementById("city").value = "New York";
	document.getElementById("comment").value = "";
  
	document.querySelector("input[name='firstName']").addEventListener("input", function () 
	{
	  if (this.value.length >= 5) 
	  {
		this.style.backgroundColor = "#33FF57";
	  }

	  else 
	  {
		this.style.backgroundColor = "";
	  }
	});
  

	document.getElementById("show").addEventListener("click", function () 
	{
	  let password = document.querySelector("input[name='password']");
	  if (password.type === "password") 
	  {
		password.type = "text";
		this.textContent = "Hide";
	  } 
	  
	  else 
	  {
		password.type = "password";
		this.textContent = "Show";
	  }
	});
  

	form.addEventListener("submit", function (event) 
	{
	  event.preventDefault();
  

	  let favfood = document.querySelector("input[name='food']:checked");
	  if (!favfood || favfood.value !== "2") {
		alert("Apple is nutirtious! hence, You should like Apple as your favourite food!");
		return;
	  }
  
	  let selectedText = document.getSelection().toString();
	  if (selectedText !== "") 
	  {
		alert("Why did you select that text?");
		return;
	  }
  

	  console.log("Form submitted successfully!");
	});
  

	document.querySelector("input[name='accept']").addEventListener("change", function () {
	  let sendButton = document.querySelector("button[name='send']");
	  sendButton.disabled = !this.checked;
	});
  
	
	let firstname = document.querySelector("input[name='firstName']");
	firstname.addEventListener("change", function () {
	  localStorage.setItem("firstName", this.value);
	});
	const storedFirstname = localStorage.getItem("firstName");
	if (storedFirstname) {
	  firstname.value = storedFirstname;
	}
  });
  