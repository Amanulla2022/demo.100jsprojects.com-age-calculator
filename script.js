const btnElement = document.getElementById("btn");
const birthdayElement = document.getElementById("birth-day");
const ansElement = document.getElementById("ans");

function calculateAge() {
  const birthdayValue = birthdayElement.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const { year, month } = getAge(birthdayValue);
    ansElement.innerText = `Your age is ${year} ${
      year > 1 ? "years" : "year"
    } and ${month} ${month > 1 ? "months" : "month"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let year = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    year--;
    month = 12 + month;
  }

  return { year, month };
}

btnElement.addEventListener("click", calculateAge);
