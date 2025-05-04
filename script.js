document.getElementById("vote-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  const name = nameInput.value.trim();
  const ageValue = ageInput.value.trim();

  // Check if both fields are filled
  if (name === "" || ageValue === "") {
    alert("Please enter valid details.");  // Make sure the alert message is exact
    return;
  }

  const age = parseInt(ageValue, 10);

  if (isNaN(age)) {
    alert("Please enter valid details.");  // Make sure the alert message is exact
    return;
  }

  // Promise to check eligibility after 4 seconds
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  })
    .then((message) => alert(message.trim()))  // Ensure no extra spaces
    .catch((error) => alert(error.trim()));   // Ensure no extra spaces
});
