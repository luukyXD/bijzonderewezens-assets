document.addEventListener("DOMContentLoaded", function() {
    const navBtn = document.querySelector("nav > button.navcoll");
    const openDiv = document.querySelector("nav > div.open");

    if (navBtn && openDiv) {
        navBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            navBtn.classList.toggle("act");
            openDiv.classList.toggle("show");
        });

        document.addEventListener("click", function(e) {
            if (!navBtn.contains(e.target) && !openDiv.contains(e.target)) {
                openDiv.classList.remove("show");
                navBtn.classList.remove("act");
            }
        });
    }
});