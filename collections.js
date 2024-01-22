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

    const checkboxes = document.querySelectorAll('.filter-checkbox');
        const images = document.querySelectorAll('.cli');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterImages);
        });

        function filterImages() {
            let selectedFilters = [];

            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    selectedFilters.push({
                        category: checkbox.dataset.category,
                        filter: checkbox.dataset.filter
                    });
                }
            });

            images.forEach(img => {
                const h3 = img.querySelector('h3');
                const shouldShow = selectedFilters.every(filter => {
                    return h3.textContent.includes(filter.filter) && h3.dataset.category;
                });

                img.style.display = shouldShow || selectedFilters.length === 0 ? 'block' : 'none';
           
            });
        }