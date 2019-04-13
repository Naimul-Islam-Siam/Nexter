var likeBtn = document.querySelectorAll(".home__like");
var color = "red";

for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", function () {
        this.classList.toggle("like_active");
    });
}

//Smooth Scroll
$("#header-btn").click(function () {
    $('html, body').animate({
        scrollTop: $("#properties").offset().top
    }, 200);
});