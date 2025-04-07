fetch("https://ucm5rq40q1.execute-api.ap-southeast-2.amazonaws.com/prod/counter")
  .then(response => response.json())
  .then(data => {
    document.getElementById("visitor-count").textContent = data.views;
  })
  .catch(error => {
    console.error("Error fetching visitor count:", error);
    document.getElementById("visitor-count").textContent = "N/A";
  });