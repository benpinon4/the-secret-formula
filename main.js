//query selectors//
// ++++++
//Part 1
let alertTextInput = document.querySelector("#alert-input");
let alertSubmit = document.querySelector("#alert-submit");

// ++++++
// Part 2
let sandwichIngredients = document.querySelectorAll(
  "#sandwichForm .sandwich-toppings"
);
let sandwichSubmit = document.querySelector("#sandwich-submit");

// ++++++
// Part 3

let dateInput = document.querySelector("#date-input");
let haircutTypeInput = document.querySelector("#haircutType-input");
let hairTypeRadios = document.querySelectorAll("#hairtypeDiv input");
let hairSubmit = document.querySelector("#haircut-submit");

// ++++++
// Part 4 Create Account
let usernameInput = document.querySelector("#usernameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let retypePasswordInput = document.querySelector("#retype-passwordInput");
let accountSubmit = document.querySelector("#accountSubmit");

// *****************************************************************************//
//event listeners//
// ++++++
//Part 1
alertSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  alert(alertTextInput.value);
});
// resets
alertTextInput.value = "";

// ++++++
// Part 2

sandwichSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  let alertIngredientsList = "";
  for (let i = 0; i < sandwichIngredients.length; i++) {
    if (sandwichIngredients[i].checked === true) {
      alertIngredientsList =
        alertIngredientsList + " " + sandwichIngredients[i].id;
    }
  }

  alert(`Your sandwich order contains: ${alertIngredientsList}`);
  // resets
  for (let i = 0; i < sandwichIngredients.length; i++) {
    sandwichIngredients[i].checked = false;
  }
});
// ++++++
// Part 3 Haircut Appointment
hairSubmit.addEventListener("click", function (event) {
  let hairtype = "";
  event.preventDefault();
  for (let i = 0; i < hairTypeRadios.length; i++) {
    if (hairTypeRadios[i].checked === true) {
      hairtype = hairTypeRadios[i].id;
    }
  }
  alert(
    `Your haircut has been scheduled for ${dateInput.value} with ${haircutTypeInput.value} for ${hairtype} hair.`
  );
  // resets
  dateInput.value = "";
  haircutTypeInput.value = "";
  hairtype.value = "";
  for (let i = 0; i < hairTypeRadios.length; i++) {
    hairTypeRadios[i].checked = false;
  }
});
// ++++++
// Part 4 Create Account
accountSubmit.addEventListener("click", function (event) {
  event.preventDefault();


  if (
    usernameInput.value.length >= 3 &&
    passwordInput.value.length >= 4 &&
    emailInput.value.indexOf("@") !== -1
  ) {
    if (passwordInput.value === retypePasswordInput.value) {
      alert(
        `Thank you for creating an account.\nYour username: ${usernameInput.value}\nYour email address: ${emailInput.value}`
      );
    } else {
      alert(`Your passwords didn't match. Please try again.`);
    }
  } else {
    alert(
      "Your username, email address, or password did not meet the requirements. Please try again."
    );
  }
  // resets
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  retypePasswordInput.value = "";
});
