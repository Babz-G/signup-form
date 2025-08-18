let form = document.querySelector("form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  console.log("Data:", dataObject);
  alert("Thank you! Your free trial has been claimed!");
  form.reset();
}
