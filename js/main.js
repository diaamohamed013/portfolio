$(".nav-item").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

$(`.navbar-nav li a[href^="#"]`).click(function(e){
 //scrolling to section after click its link from nav bar
    let aHref = $(e.target).attr("href");
    let lin = $(aHref).offset().top;
    $('body,html').animate({
            scrollTop: lin
        }, 100);
})

// $(document).ready(function () {
//     //Smooth scrolling when click to nav
//     // $('.navbar-nav li a[href^="#"]').click(function (e) {
//     //     e.preventDefault();
//     //     var curLink = $(this);
//     //     var scrollPoint = $(curLink.attr('href')).position().top;
//     //     $('body,html').animate({
//     //         scrollTop: scrollPoint
//     //     }, 100);
//     // })

//     $(`.navbar-nav li a[href^="#"]`).click(function (e) {
//         //scrolling to section after click its link from nav bar
//         let aHref = $(e.target).attr("href");
//         let lin = $(aHref).offset().top;
//         $('body,html').animate({
//             scrollTop: lin
//         }, 100);
//     })

//     $(window).scroll(function () {
//         onScrollHandle();
//     });

//     function onScrollHandle() {

//         //Get current scroll position
//         var currentScrollPos = $(document).scrollTop();

//         //Iterate through all node
//         $('.navbar-nav a').each(function () {
//             var curLink = $(this);
//             var refElem = $(curLink.attr('href'));
//             //Compare the value of current position and the every section position in each scroll
//             if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
//                 //Remove class active in all nav
//                 $('.navbar-nav > ul > li').removeClass("active");
//                 //Add class active
//                 curLink.parent().addClass("active");
//             }
//             else {
//                 curLink.parent().removeClass("active");
//             }
//         });
//     }
// });