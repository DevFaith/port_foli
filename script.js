// Add this before the closing </body> tag in your HTML
document.addEventListener("DOMContentLoaded", function(){
    var preloader = document.getElementById('preloader');
    window.addEventListener('load', function(){
      preloader.style.display = 'none';
    });
  });
  


  // Get the navbar and the icon
  var navbar = document.getElementById("myNavbar");
  var icon = document.querySelector(".nav-icon");

  // Toggle the navbar on hover
  icon.onmouseover = function() {
    navbar.style.display = "block";
  }

  icon.onmouseout = function() {
    navbar.style.display = "none";
  }

  // Toggle the navbar on click
  icon.onclick = function() {
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  }

window.onload = function() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months are zero-based (0 = January)
    var year = date.getFullYear();

    // Format the date as "dd-mm-yyyy"
    var formattedDate = day + "/" + month + "/" + year;

    document.getElementById('date').innerHTML = formattedDate;
};

// Remove preloader and display content
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
  });
  