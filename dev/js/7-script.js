$(document).ready(function() {
    
    var windowWidth = $(window).width();
    var closedTestimonialItemHeight;
    var closedAboutTextHeight;
    var closedTestimonialItemContentHeight;
    
    
    
    var alignmentRow = function(){
      var leftRows = document.querySelectorAll(".seminar-vs-online__left .seminar-vs-online__row");
      var rightRows = document.querySelectorAll(".seminar-vs-online__right .seminar-vs-online__row")
      var rowsCount = rightRows.length;

      for (var i = 0; i < rowsCount; i++){
        var currentLeftCell = leftRows[i];
        var currentRightCell = rightRows[i];
        var leftRowHeight = currentLeftCell.clientHeight;
        var rightRowHeight = currentRightCell.clientHeight;
        var difference = rightRowHeight - leftRowHeight;

        if (difference > 0){
            currentLeftCell.style.height = rightRowHeight + 'px';

        }
        else if(difference < 0){
            currentRightCell.style.height = leftRowHeight + 'px';
        }
      }


    };
    
    
     var appendSubscribeLink = function(windowWidth){
        var subscribeLink = $(' .sticky-nav .main-menu__link.mobile-subscribe-link.red-link');
        var stickyNavBar = $('.sticky-nav');
        var container = $(stickyNavBar).find('.container');
        var stickyMenu = $(stickyNavBar).find('.main-menu__list');
            
        if (windowWidth < 481){
            $(stickyMenu).append(subscribeLink);
            $(subscribeLink).addClass('subscribe-btn');
            
        }
        if (windowWidth > 481){
            $(container).append(subscribeLink);
            $(subscribeLink).removeClass('subscribe-btn')
        }
    };
    
    $('.js_testimonials-slider').slick({
            nextArrow: '',
            prevArrow: '',
           dots: true,
          infinite: true,
          centerMode: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1001,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true

              }
            }

          ]
            });
    
    
    
    
    $('.testimonial-more-link').click(function(e){
        
        $('.testimonials__item').animate({"height": closedTestimonialItemHeight});
        $('.testimonial-bottom').fadeIn();
        
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().fadeOut();
        closedTestimonialItemHeight = $(this).closest('.testimonials__item').outerHeight();
        
        var testimonialTopHeight = $(this).parent().parent().find('.testimonial-top').outerHeight();
        var testimonialTextFullHeight = $(this).closest('.testimonials__item').find('.testimonial-text').outerHeight();
        var totalHeight = testimonialTextFullHeight + testimonialTopHeight + 100;
        $(this).closest('.testimonials__item').css({"height": closedTestimonialItemHeight}).animate({"height": totalHeight});
        $(this).closest('.testimonials__item').addClass('opened');
    });
    
    $('.testimonials__item').click(function(e){
        e.stopPropagation();
        if ($(this).hasClass('opened')){
          $(this).removeClass('opened');
          $(this).find('.testimonial-bottom').fadeIn();
          var currentItemHeight = $(this).outerHeight();
            $(this).css({"height": currentItemHeight}).animate({"height": closedTestimonialItemHeight});
        }
        
    });
    
    
         
    $('.js_testimonials-slider .slick-dots li').click(function(){
        $('.testimonials__item').animate({"height": closedTestimonialItemHeight});
        $('.testimonial-bottom').fadeIn();
        showTestimonialMoreLink();
    });
    
    var showTestimonialMoreLink = function(){
        var testimonialsItemArr = $('.testimonials__item');
        for (var i = 0; i < testimonialsItemArr.length; i++){
            var currItem = $(testimonialsItemArr[i]);
            var currItemInner = $(currItem).find('.testimonials__item-content');
            if($(currItemInner).outerHeight() <  $(currItem).outerHeight()){
                $(currItem).find('.testimonial-bottom').css("display", "none");
            }
            
           
        }
    };
    showTestimonialMoreLink();
    $("#tel").mask("+7(999) 999-999-99");
    
  
   
    
   $('.anchor-link').click(function(e){
       
       var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 30
        }, 800);
        return false;
        
        
       
    });
    
    
    window.onscroll = function() {
      var headerHeight = $('.header').outerHeight();
      var topOff = window.pageYOffset;
       
        if (windowWidth > 481){
             
           if(topOff>headerHeight){
                $('.sticky-nav').css({"display": "block", "transform": "translateY(0)", "transition": "transform 0.6s"});
            }
          if(topOff<=headerHeight){
            $('.sticky-nav').css({"display": "block", "transform": "translateY(-90px)", "transition": "transform 0.6s"});
              if($(window).width() < 1000 ){
                  $('.sticky-nav .main-menu__list').slideUp();
                  $('mobile-menu__icon').removeClass('active');
              }

          }
        }
    
    };
    $('.mobile-menu__icon').click(function(){
        if($(window).width() < 481 ){
           $('.sticky-nav').toggleClass('active');
           }
        $(this).toggleClass('active');
        $(this).parent().find('.main-menu__list').slideToggle();
    });
    
    $('.sticky-nav .main-menu__link').click(function(){
          if($(window).width() < 1001 ){
                $(this).closest('.main-menu__list').slideUp();
                $('.mobile-menu__icon').removeClass('active');
                $('.sticky-nav').removeClass('active');
          }
    })
    
           
    window.addEventListener('resize', function(){
        windowWidth = $(window).width();
        appendSubscribeLink(windowWidth);
        alignmentRow();
        showTestimonialMoreLink();
    })
    
       
     $('.about-more-link').click(function(e){
         e.preventDefault();
         e.stopPropagation();
         $(this).parent().fadeOut();
         var textP = $('.about-text p');
         closedAboutTextHeight = $('.about-text').outerHeight();
         var totalHeight = 0;
         for (var i = 0; i<textP.length; i++){
              totalHeight = totalHeight + $(textP[i]).outerHeight();
         }
         
        $(this).closest('.about-text').animate({"height": totalHeight});
        $(this).closest('.about-text').addClass('opened');
     });
    
    
    $('.about-text').click(function(e){
        e.stopPropagation();
        if ($(this).hasClass('opened')){
          $(this).removeClass('opened');
          $(this).find('.about-text-bottom').fadeIn();
          var currentItemHeight = $(this).outerHeight();
            $(this).css({"height": currentItemHeight}).animate({"height": closedAboutTextHeight});
        }
        
    });
    
    appendSubscribeLink(windowWidth);
    alignmentRow();
});