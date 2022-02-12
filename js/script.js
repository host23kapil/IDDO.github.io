let navbar = document.querySelector(".wrap-1 #navbar");
document.querySelector('#menu-btn').addEventListener("click", function (e) {
    e.preventDefault()
    navbar.style.left = "0";
});
document.querySelector('#close').addEventListener("click", function () {
    e.preventDefault()
    navbar.style.left = "-170%";
});
$(document).ready(function () {
    $(".accord-header").click(function (e) {
        e.preventDefault()
        if ($(this).next(".accord-p").hasClass("active")) {
            $(this).next(".accord-p").removeClass("active").slideUp()
            $(this).find("a").removeClass("fa-minus").addClass("fa-plus")
        }
        else {
            $(".accord .accord-p").removeClass("active").slideUp()
            $(".accord .accord-header a").removeClass("fa-minus").addClass("fa-plus");
            $(this).next(".accord-p").addClass("active").slideDown()
            $(this).find("a").removeClass("fa-plus").addClass("fa-minus")
        }
    })
})
// $(".accord-header").click(function (e) {
//     e.preventDefault()


//     if ($(this).hasClass("active")) {

//         $(this).removeClass("active");
//         $(this).next(".accord-p").slideUp();
//         $(this).find("a.fa-plus").removeClass("fa-plus").addClass("fa-minus")
//     } else {
//         $(".accord .accord-p").slideUp()
//         $(".accord .accord-header a").removeClass("fa-minus").addClass("fa-plus");
//         $(this).addClass("active")
//         $(this).next(".accord-p").slideDown()
//         // $(this).find("a.fa-plus").removeClass("fa-plus").addClass("fa-minus")
//     }

// });

$('.owl-carousel').owlCarousel({

    loop: true,
    nav: false,
    autoplay: true,
    autoplaytimeout: 700,
    margin: 10,
    responsive: {
        0: {
            items: 1
        }
    }
});