let userName = document.getElementById("nameInp");
let subject = document.getElementById("subInp");
let mail = document.getElementById("mailInp");
let p1 = document.querySelector(".validate1");
let p2 = document.querySelector(".validate2");
let p3 = document.querySelector(".validate3");
let fromContact = document.querySelector("form")
let inp = document.querySelectorAll("input");

let info = {
    name: "",
    mail: "",
    subject: ""
}



fromContact.addEventListener("submit", (e) => {
    e.preventDefault();
    let infoContainer = { ...info };
    if (userName.value != "" && mail.value != "" && subject.value != "") {
        infoContainer.name = userName.value;
        infoContainer.mail = mail.value;
        infoContainer.subject = subject.value;
        console.log(infoContainer);
        p1.classList.add("hide");
        p2.classList.add("hide");
        p3.classList.add("hide");
    }
    else {
        p1.classList.replace("hide", "show");
        p2.classList.replace("hide", "show");
        p3.classList.replace("hide", "show");
    }
})


$(document).ready(function () {
    // Smooth scrolling when click to nav
    $('.navbar-nav li a[href^="#"]').click(function (e) {
        e.preventDefault();
        var curLink = $(this);
        var scrollPoint = $(curLink.attr('href')).offset().top;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 100);
    })

    $(`.navbar-nav li a[href^="#"]`).click(function (e) {
        //scrolling to section after click its link from nav bar
        let aHref = $(e.target).attr("href");
        let lin = $(aHref).offset().top;
        $('body,html').animate({
            scrollTop: lin
        }, 100);
    })

    $(window).scroll(function () {
        onScrollHandle();
    });

    function onScrollHandle() {

        //Get current scroll position
        var currentScrollPos = $(document).scrollTop();

        //Iterate through all node
        $('.navbar-nav a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
            //Compare the value of current position and the every section position in each scroll
            if (refElem.offset().top <= currentScrollPos && refElem.offset().top + refElem.height() > currentScrollPos) {
                //Remove class active in all nav
                $('.navbar-nav > ul > li').removeClass("active");
                //Add class active
                curLink.parent().addClass("active");
            }
            else {
                curLink.parent().removeClass("active");
            }
        });
    }

    function validateUSerName() {
        let regx = /^[a-zA-Z0-9]{4,30}$/
        if (regx.test(userName.value)) {
            p1.classList.add("hide");
            return true;
        }
        else {
            p1.classList.replace("hide", "show");
            return false;
        }
    };

    function validatemail() {
        let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (regx.test(mail.value)) {
            p2.classList.add("hide");
            return true;
        }
        else {
            p2.classList.replace("hide", "show");
            return false;
        }
    };

    function validatesubject() {
        let regx = /^[a-zA-Z\s]*$/
        if (regx.test(subject.value)) {
            p3.classList.add("hide");
            return true;
        }
        else {
            p3.classList.replace("hide", "show");
            return false;
        }
    };

    userName.addEventListener("keyup", function () {
        validateUSerName();
    });

    mail.addEventListener("keyup", function () {
        if (validateUSerName()) {
            validatemail();
        }
        else {
            validateUSerName();
            validatemail();
        }
    });

    subject.addEventListener("keyup", function () {
        if (validateUSerName() && validatemail()) {
            validatesubject();
        }
        else {
            validateUSerName();
            validatemail();
            validatesubject();
        }
    });

});
// $(".nav-item").on("click", function () {
//     $(this).addClass("active");
//     $(this).siblings().removeClass("active");
// });

// $(`.navbar-nav li a[href^="#"]`).click(function(e){
//  //scrolling to section after click its link from nav bar
//     let aHref = $(e.target).attr("href");
//     let lin = $(aHref).offset().top;
//     $('body,html').animate({
//             scrollTop: lin
//         }, 100);
// })