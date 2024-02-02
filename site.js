console.log("site.js is linked!");

function getDateTime() {
    let date = new Date();
    let hour = date.getHours();
    if (hour >= 19) {
      document.getElementById('d').innerHTML = "Good Evening";
    } else if (hour >= 12) {
      document.getElementById('d').innerHTML = "Good Afternoon";
    } else if (hour >= 6) {
      document.getElementById('d').innerHTML = "Good Morning";
    } else if (hour >= 3) {
      document.getElementById('d').innerHTML = "GO. TO. SLEEP.";
    } else if (hour >= 2) {
      document.getElementById('d').innerHTML = "You should consider going to sleep";
    } else if (hour >= 0) {
      document.getElementById('d').innerHTML = "Go to sleep soon";
    } else {
      document.getElementById('d').innerHTML = "If you see this, something is wrong with the code";
    }
  }
  getDateTime()