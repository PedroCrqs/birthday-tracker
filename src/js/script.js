// Adds a form to get the birthday date via HTML inputs
document.getElementById("formData").addEventListener("submit", function (e) {
  e.preventDefault();

  // Gets the values from the birthday date inputs
  const birthdayDay = parseInt(document.getElementById("day").value, 10);
  const birthdayMonth = parseInt(document.getElementById("month").value, 10);

  // Current system date
  const todayDate = new Date();
  const currentDay = todayDate.getDate();
  const currentMonth = todayDate.getMonth() + 1;

  // Number of days in each month in an array
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Checks how many days are left in the current month
  function daysLeftInCurrentMonth() {
    return daysInMonth[currentMonth - 1] - currentDay;
  }

  // Sums all the days contained in the months between the current month and the birthday month
  function sumDaysBetweenMonths(start, end) {
    let total = 0;
    for (let i = start; i < end; i++) {
      total += daysInMonth[i];
    }
    return total;
  }

  let daysLeft = 0;

  // Final formula to calculate the remaining days
  // If the birthday is still this year
  if (
    currentMonth < birthdayMonth ||
    (currentMonth === birthdayMonth && currentDay < birthdayDay)
  ) {
    daysLeft =
      daysLeftInCurrentMonth() +
      sumDaysBetweenMonths(currentMonth, birthdayMonth - 1) +
      birthdayDay;
  } // If today is the birthday
  else if (currentMonth === birthdayMonth && currentDay === birthdayDay) {
    console.log("Today is your birthday!");
    return;
  } // If the birthday is next year
  else {
    let daysLeftThisYear =
      daysLeftInCurrentMonth() + sumDaysBetweenMonths(currentMonth, 12);
    let daysAtStartOfNextYear = sumDaysBetweenMonths(0, birthdayMonth - 1);
    daysLeft = daysLeftThisYear + daysAtStartOfNextYear + birthdayDay;
  }

  if (daysLeft > 0) {
    console.log("There are " + daysLeft + " days left until your birthday!");
  }
});
