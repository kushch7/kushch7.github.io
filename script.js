function workwithus() {
  let contact = prompt(
    "Please, write your email for further cooperation:",
    "expample@gmail.com"
  );
  if (contact != "" && contact != null) {
    alert("Thank you! We will contact you on: " + contact);
  } else {
    alert("No valid information was recorded.");
  }
}
