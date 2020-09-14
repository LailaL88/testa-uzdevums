/* Open navbar when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close navbar when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {
  // Add smooth scrolling
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        4000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

//Show the icon on scroll

$(window).scroll(function () {
  if ($(window).scrollTop() > $("body").height() / 100) {
    $("#upArrow").fadeTo(500, 1);
  }
});

$("#upArrow").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
