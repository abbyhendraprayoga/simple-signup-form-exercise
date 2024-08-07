const signUpForm = document.forms["sign-up-form"];
const firstNameInput = signUpForm["first-name"];
const lastNameInput = signUpForm["last-name"];
const ageInput = signUpForm["age"];
const firstNameValue = document.body.querySelector("#first-name-value");
const alertFnMsg = document.querySelector("#alert-fn");
const alertLnMsg = document.querySelector("#alert-ln");
const alertAgeMsg = document.querySelector("#alert-age");
const fullNameValue = document.querySelector("#fullname-value");
const ageValue = document.querySelector("#age-value");

// firstNameInput.addEventListener("input", () => {
//   firstNameValue.innerHTML = firstNameInput.value;
// });

function formValidation() {
  if (firstNameInput.value === "") {
    alertFnMsg.classList.remove("text-success");
    alertFnMsg.classList.add("text-danger");
    alertFnMsg.innerHTML = "First name cannot be empty";
  } else {
    alertFnMsg.classList.remove("text-danger");
    alertFnMsg.classList.add("text-success");
    alertFnMsg.innerHTML = "Success!";
  }
  if (lastNameInput.value === "") {
    alertLnMsg.classList.remove("text-success");
    alertLnMsg.classList.add("text-danger");
    alertLnMsg.innerHTML = "Last name cannot be empty";
  } else {
    alertLnMsg.classList.remove("text-danger");
    alertLnMsg.classList.add("text-success");
    alertLnMsg.innerHTML = "Success!";
  }
  if (ageInput.value < 18) {
    alertAgeMsg.classList.remove("text-success");
    alertAgeMsg.classList.add("text-danger");
    alertAgeMsg.innerHTML = "At least 18 years old";
  } else {
    alertAgeMsg.classList.remove("text-danger");
    alertAgeMsg.classList.add("text-success");
    alertAgeMsg.innerHTML = "Success!";
  }
}

function fetchIdentity() {
  if (
    alertFnMsg.innerHTML === "Success!" &&
    alertLnMsg.innerHTML === "Success!" &&
    alertAgeMsg.innerHTML === "Success!"
  ) {
    fullNameValue.innerHTML = firstNameInput.value + " " + lastNameInput.value;
    ageValue.innerHTML = ageInput.value;
  } else {
    fullNameValue.innerHTML = "undefined";
    ageValue.innerHTML = "undefined";
  }
}

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  formValidation();
  fetchIdentity();
};

// signUpForm.onsubmit = (event) => {
//   event.preventDefault();
//   if (
//     firstNameInput.value === ""
//       ? (errorMsg.innerHTML = "sila isi nama anda")
//       : (successMsg.innerHTML = "terima kasih kerana mendaftar")
//   );
// };
