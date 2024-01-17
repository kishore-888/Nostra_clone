// Selecting Side Navbar, MenuIcon

var side_navbar = document.getElementById("side_navbar")
var menuicon = document.getElementById("menuicon")
var close_nav = document.getElementById("close_nav")

menuicon.addEventListener("click", function () {

    side_navbar.style.left = 0
})

close_nav.addEventListener("click", function(){
    side_navbar.style.left = "-50%"
})