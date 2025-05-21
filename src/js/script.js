const newBirthday = () => {
  const name = document.getElementById("name").value;
  const birthdayDay = parseInt(document.getElementById("day").value, 10);
  const birthdayMonth = parseInt(document.getElementById("month").value, 10);
  const birthdayYear = parseInt(document.getElementById("year").value, 10);
  const birthday =
    String(birthdayDay).padStart(2, "0") +
    "/" +
    String(birthdayMonth).padStart(2, "0") +
    "/" +
    String(birthdayYear).slice(-2);
  const degreeImportance = document.getElementById("degreeImportance").value;

  if (!name || !birthdayDay || !birthdayMonth || !birthdayYear) {
    alert("Please, fill in all fields.");
    return;
  }

  // Current system date
  const todayDate = new Date();
  const currentDay = todayDate.getDate();
  const currentMonth = todayDate.getMonth() + 1;

  // Number of days in each month in an array
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Checks how many days are left in the current month
  const daysLeftInCurrentMonth = () =>
    daysInMonth[currentMonth - 1] - currentDay;

  // Sums all the days contained in the months between the current month and the birthday month
  const sumDaysBetweenMonths = (start, end) => {
    let total = 0;
    for (let i = start; i < end; i++) {
      total += daysInMonth[i];
    }
    return total;
  };

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
    document.getElementById("daysLeft").textContent = "Today";
    return;
  } // If the birthday is next year
  else {
    let daysLeftThisYear =
      daysLeftInCurrentMonth() + sumDaysBetweenMonths(currentMonth, 12);
    let daysAtStartOfNextYear = sumDaysBetweenMonths(0, birthdayMonth - 1);
    daysLeft = daysLeftThisYear + daysAtStartOfNextYear + birthdayDay;
  }

  // Create a new row in the table with the new birthday information
  const tableBody = document.getElementById("table-body");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
          <td>${name}</td>
          <td>${birthday}</td>
           <td>
            <select class="status-select">
              <option value="Friend" ${
                degreeImportance === "Friend" ? "selected" : ""
              }>Friend</option>
              <option value="Familiar" ${
                degreeImportance === "Familiar" ? "selected" : ""
              }>Familiar</option>
              <option value="Family"${
                degreeImportance === "Family" ? "selected" : ""
              }>Family</option>
              <option value="Love"${
                degreeImportance === "Love" ? "selected" : ""
              }>Love</option>
            </select>
          </td>
          <td>${daysLeft}</td>
          <td>    
          <button class="delete-button" onclick="deleteB(this)">Delete</button>
          </td>
        `;

  // Add new row to the table body
  tableBody.appendChild(newRow);

  // Clean the input fields
  document.getElementById("name").value = "";
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
};

// Delete button function
const deleteB = (button) => {
  const row = button.parentElement.parentElement;
  row.remove();
};
