// cards //
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1, nav: false },
  },
});


// sidebar //
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
