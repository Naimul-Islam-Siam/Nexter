var likeBtn = document.querySelectorAll(".home__like");
var color = "red";

for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", function () {
        this.classList.add("like_active");
    });
}