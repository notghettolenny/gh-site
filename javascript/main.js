$(window).ready(function () {
    //when scroll top (nav bar)
    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > 150) {
            $(".nav-bar").addClass("active");
        } else {
            $(".nav-bar").removeClass("active")
        }

        scrollTop > 1000 ? $(".fas.fa-chevron-up.main").fadeIn() : $(".fas.fa-chevron-up.main").fadeOut()
    })

    //scroll to top icon
    $(".fas.fa-chevron-up.main").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        },1000)
    })
    //when window loaded 
    $(window).on("load", function () {
        $(".loader-screen").delay(300).fadeOut()
    })

    //nav-bar user icon
    $(function () {
        $(".fa-user").on("click", function () {
            $(".loader-screen").fadeIn().delay(1000).fadeOut("slow")
            $(".hidden.main-menu").slideUp()
            $(".hidden.main-user").fadeIn(1500).css("display","flex")
            $("body").css("overflow","hidden")
        })
    
        $(".hidden.main-user").on("click", function () {
            $(this).fadeOut()
            $("body").css("overflow-y","scroll")
        })
    })
    
    //Header Carousel Slider
    $(function () {
        const timing = 3000;
        const targetOne = $("header .txt h1 span").eq(0),
              targetTwo = $("header .txt h1 span").eq(1);
        const container = setInterval(time, timing)
        function time() {
            if (targetOne.hasClass("active")) {
                targetOne.removeClass("active")
                targetTwo.addClass("active")
            } else {
                targetTwo.removeClass("active")
                targetOne.addClass("active")
            }
        }

        $("header .dir-icons i").each(function () {
            $(this).on({
                mouseenter:function () { clearInterval(container) },
                mouseleave:function () { setInterval(time, timing) },
                click:function () { clearInterval(container); time() }
            })
        })
    })

    //nav-bar menu
    $(function () {
        $(".main-menu.hidden .container ul li").on("click", function () {
            if ($(this).text() == "contact") {
               $(".hidden.contact").slideDown().css("display","flex")
               $(".main-menu.hidden").slideUp()
            } else {
                let sectionPosition = $("." + $(this).data("scroll")).offset().top,
                    navBarHeight = $(".nav-bar").innerHeight();
                $("html, body").animate({
                    scrollTop : sectionPosition - navBarHeight
                },1500)
                $(".main-menu.hidden").slideUp()
            }
        })

        $(".hidden.contact .parent").on("click", function (e) {
            e.stopPropagation()
        })

        $(".hidden.contact .parent i.fa-times").on("click", function () {
            $(this).parents(".hidden.contact").slideUp()
        })
    })
    
    //all icon
    $(function () {
        function allIcon(icon,targetParent) {
            let arr = ["fade", "slide"];
            $(icon).on("click", function () {
                if ($(window).innerWidth() <= 800) {
                    for (let i = 0; i < arr.length; i++) {
                        if ($(targetParent).hasClass("fade")) {
                            $(targetParent).fadeIn(1000).css("display", "flex").addClass("active");
                            $(".hidden.main-menu").delay(1500).slideUp()
                        } else  {
                            $(targetParent).slideDown().css("display", "flex")
                            $(".hidden.main-menu").slideUp()
                        }
                    }
                } else {
                    $(targetParent).slideDown().css("display", "flex")
                    $(targetParent).fadeIn().css("display", "flex").addClass("active");
                }
            })
            $(".hidden.main-menu .fa-times, .hidden.main-search .fa-times").on("click", function () {
                $(this).parent().slideUp()
            })
            $(".hidden.main-products .fa-times").on("click", function () {
                $(this).parent().parent().fadeOut().removeClass("active")
            })
        }
        allIcon(".fa-search",".hidden.main-search")
        allIcon(".fa-shopping-bag",".hidden.main-products")
        allIcon(".fa-caret-right.top", ".hidden.main-video")
    
        //shopping icon
        $(".hidden.main-products .cart, .hidden.main-video .frame-video, .hidden.main-user .container").on("click", function (e) {
            e.stopPropagation()
        })
        //products section
        $(".hidden.main-products, .hidden.main-video").on("click", function () {
            $(this).slideUp().removeClass("active");
        })
        // menu icon
        $(".nav-bar .fa-bars").on("click", function () {
            $(".hidden.main-menu").slideDown(500).css("display","flex")
        })
    })

    /*create stars for imgs silder-one*/
    $(function () {
        const targetSlider = $(".section-one .slider-one .bord");
        targetSlider.addClass("swiper-slide")
        let parenticon = $("<div class='parent-icon'></div>");
        for (let i = 0; i < 5; i++) {
                let icon = $("<i class='fas fa-star yellow'></i>");
                parenticon.append(icon)
        }
        targetSlider.append(parenticon)
    })
   
   
    //swiper option
   $(function () {
        let slickWidth = $(window).innerWidth(),
        numSlide;
        $('.slider-one .row .col-lg-8').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: slickWidth <= 467 ? numSlide = 1 : slickWidth >= 767 ? numSlide = 3 : numSlide = 2,
        });

        $(".slider-four .row .parent").slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: slickWidth <= 767 ? numSlide = 1 : slickWidth >= 991 ? numSlide = 3: numSlide = 2
        })

        $(".slider-five .two .parent").slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: slickWidth <= 576 ? numSlide = 1 : slickWidth >= 991 ? numSlide = 4 : numSlide = 2
        })

        $(".section-tow .slider-one .parent").slick({
            slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
        })

        $(".section-tow .slider-tow .parent").slick({
            slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
        })

        $(".section-tow .slider-three .parent").slick({
            slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        appendArrows: $(".section-tow .slider-three .container .row .buttons"), //append arrows in anther where
        prevArrow:"<i class='fas fa-chevron-left'></i>",    //change html from btn to icon
        nextArrow:"<i class='fas fa-chevron-right'></i>",   //change html from btn to icon
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
        })

        $(".slick-arrow").css("display","none")
        $(".section-tow .slider-three .row .buttons i").css("display","inline-block")
   })
   
   //click on img of slider-one
   $(function () {
        $('.slider-one .row .col-lg-8 button').css("display","none");
        $('.slider-one .row .col-lg-8 .bord .img').on("click", function () {
            let tarImg = $(this).html(),
                tarText = $(this).find("img").attr("src"),
                eleLength = $(".slider-one .col-lg-8 .slick-track").children().length,
                contentTarImg = "<div class='txt'><p>gallery</p><span>image 5 of " + eleLength + "</span></div>";
        $(".section-one .hidden-img")
        .fadeIn()
        .css("display","flex")
        .html("<div class='content'>" + tarImg + contentTarImg + "</div>")
        .on("click", function () {$(this).fadeOut()})
        })
        $(".section-one .hidden-img").on("click",".content", function (e) {
            e.stopPropagation()
        })
   })
    
    //counter function
    $(function () {
        function countNumber(element,speed,maxValue) {
            const timer = setInterval(function () {
                let num = eval(element.text()),
                    i;
                if (num <= maxValue) {
                    i++;
                    element.text(num + 1)
                } else {
                    clearInterval(timer)
                    //do nothing
                }
            },speed)
        }
        $(window).on("scroll",function () {
            const SOST = $(".section-one .slider-two").offset().top, //section-one slider-thre
                  winTop = $(this).scrollTop();
            if (winTop > SOST) {
                countNumber($(".section-one .slider-two .row .txt h2"),500,19)
                countNumber($(".section-one .slider-three .container .one h1"),250,105)
                countNumber($(".section-one .slider-three .container .two h1"),200,100)
                countNumber($(".section-one .slider-three .container .three h1"),150,221)
                countNumber($(".section-one .slider-three .container .four h1"),50,875)
            }

            const STSO = $(".section-tow .slider-one").offset().top; //section-two slider-one
            if (winTop > (STSO - 100)) {
                countNumber($(".section-tow .slider-one .one span"),130, 149)
                countNumber($(".section-tow .slider-one .two span"),140, 169)
            }
    
        })
    })    
    //section one slider five 
    $(".slider-five .fa-caret-right").on("click", function () {
        $(".slider-five .hidden-video").fadeIn().css("display","flex")
    })
    $(".slider-five .hidden-video").on("click", function () { $(this).fadeOut() })

    //footer .two social icons
    $(function () {
        $("footer .tow .col-lg-6 .icons i").on({
            "mouseover": function() { 
                let targetColor = $(this).data("color");
                $(this).css("background-color",targetColor)
             },
             "mouseleave": function () { $(this).css("background-color","#202020") }
         })
    })
})
