// FOOTER ACCORDIAN FUNCTIONALITY
var acc = document.getElementsByClassName("expander__toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    /* Toggle between hiding and showing the active panel */
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//Slide show, Add to Cart, hamburger menu

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function addToCart() {
  var count = document.getElementById('lblCartCount').innerText;
           // alert("Item is added to you shopping cart!");
           if(count == 5){
            document.getElementById('lblCartCount').innerHTML = "6"; 
          }
          else if(count == 6){
            document.getElementById('lblCartCount').innerHTML = "7"; 
          }
          else if(count == 7){
            document.getElementById('lblCartCount').innerHTML = "8"; 
          }
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }

        var slideIndex = 0;
        showSlides();

        function showSlides() {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 2000); // Change image every 2 seconds
        }

  /*Shopping Cart Pop Up Window*/
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myShoppingCart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

function continueShopping(){
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

