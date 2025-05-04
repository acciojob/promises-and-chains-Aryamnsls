document.getElementById("vote-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  const name = nameInput.value.trim();
  const ageValue = ageInput.value.trim();

  // Fix: No period in the alert
  if (name === "" || ageValue === "") {
    alert("Please enter valid details");
    return;
  }

  const age = parseInt(ageValue, 10);

  if (isNaN(age)) {
    alert("Please enter valid details");
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  })
    .then((message) => alert(message.trim()))
    .catch((error) => alert(error.trim()));
});
