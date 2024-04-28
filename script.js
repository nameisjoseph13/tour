// Function to load saved data from local storage
function loadSavedData() {
    var savedData = localStorage.getItem("tableData");
    if (savedData) {
      var tableBody = document.querySelector("#dataTable tbody");
      tableBody.innerHTML = savedData;
    }
  }
  
  // Function to save data to local storage
  function saveData() {
    var tableBody = document.querySelector("#dataTable tbody");
    localStorage.setItem("tableData", tableBody.innerHTML);
  }
  
  // Function to add data
  function addData() {
    var input = document.getElementById("dataInput").value;
    var dataArray = input.split(",");
    var tableBody = document.querySelector("#dataTable tbody");
    var newRow = tableBody.insertRow();
  
    for (var i = 0; i < dataArray.length; i++) {
      var cell = newRow.insertCell();
      cell.appendChild(document.createTextNode(dataArray[i]));
    }
  
    // Add delete button to the new row
  
    // Save data to local storage
    saveData();
  
    // Clear input field after adding data
    document.getElementById("dataInput").value = "";
  }
  
  // Function to remove data
  function removeData(row) {
    var password = prompt("Please enter the password to remove data:");
    // Here you can check if the password is correct
    // For demonstration purposes, let's assume the password is "admin"
    if (password === "admin") {
      row.parentNode.removeChild(row); // Remove the row
      saveData(); // Save the updated table to local storage
      alert("Data removed successfully.");
    } else {
      alert("Incorrect password. Data removal failed.");
    }
  }
  
  function clearSavedData() {

    var password = prompt("Please enter the password to remove data:");
    // Here you can check if the password is correct
    // For demonstration purposes, let's assume the password is "admin"
    if (password === "admin") {
        localStorage.removeItem("tableData");
        var tableBody = document.querySelector("#dataTable tbody");
        tableBody.innerHTML = ""; // Clear the table
        alert("All saved data cleared successfully.");
    } else {
      alert("Incorrect password. Data removal failed.");
    }

    
  }

  
  
  // Load saved data when the page loads
  window.onload = loadSavedData;
  