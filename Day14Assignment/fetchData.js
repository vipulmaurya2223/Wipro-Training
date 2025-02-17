// Fetch employee data from API and display in console
fetch("https://dummy.restapiexample.com/api/v1/employees")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log("Employee Data:", data))
  .catch(error => console.error("Error fetching data:", error));
