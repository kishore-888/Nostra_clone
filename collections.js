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

// collections Search Functionality

var collections_container = document.getElementById("collections_container")
var search = document.getElementById("search")
var collections = collections_container.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < collections.length; count = count + 1) {
        var collectionsname = collections[count].querySelector("h3").textContent
        if (collectionsname.toUpperCase().indexOf(enteredValue) < 0)
        {
            collections[count].style.display = "none"
        }
        else
        {
            collections[count].style.display = "block"
        }
    }

    })