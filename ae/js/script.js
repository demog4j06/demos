$(function() {
    // var webHost = window.location.origin;
    switch($('html').attr("lang")) {
      case 'zh-Hans' :
        $('body').addClass('zh');
        var ajax1 = $.ajax({
          url: '../load/header_cn.html',
          dataType:'html'
        }).done(function(data) {
          $('.nav').append(data);
        }), ajax2 = $.ajax({
          url:'../load/footer_cn.html',
          dataType:'html'
        }).done(function(data) {
          $('footer').append(data);
        });
        break;
      case 'th' :
        $('body').addClass('th');
        var ajax1 = $.ajax({
          url:'../load/header_th.html',
          dataType:'html'
        }).done(function(data) {
          $('.nav').append(data);
        }), ajax2 = $.ajax({
          url:'../load/footer_th.html',
          dataType:'html'
        }).done(function(data) {
          $('footer').append(data);
        });
        break;
      case 'vi' :
        $('body').addClass('vn');
        var ajax1 = $.ajax({
          url:'../load/header_vn.html',
          dataType:'html'
        }).done(function(data) {
          $('.nav').append(data);
        }), ajax2 = $.ajax({
          url:'../load/footer_vn.html',
          dataType:'html'
        }).done(function(data) {
          $('footer').append(data);
        });
        break;
      default :
        $('body').addClass('en');
        var ajax1 = $.ajax({
          url:'../load/header_en.html',
          dataType:'html'
        }).done(function(data) {
          $('.nav').append(data);
        }), ajax2 = $.ajax({
          url:'../load/footer_en.html',
          dataType:'html'
        }).done(function(data) {
          $('footer').append(data);
        });
        break;
    }
    $.when(ajax1,ajax2).then(function(data1,data2){
        $('.lang-selector').click(function(){
            $(this).toggleClass('open');
        }); 
      $('.lang-selector > .dropdown-menu > li').click(function(){
        // window.location = '../../' +  $(this).attr('data-lang') + '/' +  window.location.pathname.split('/')[2];
        var website = window.location.href;
        window.location = '../' +  $(this).attr('data-lang') + website.substr(website.lastIndexOf('/'));
      })
      $(".toggle-menu-btn").click((function(e) {
        e.preventDefault();
        $("header .nav").toggleClass("active");
      }));
      $(".btn-close-mobile-menu").click((function(e) {
        e.preventDefault();
        $(".mobile-menu-wrap").removeClass("active");
        $(".overlayer").removeClass("active");
      }));
      // $(".footer-contact-form-toggle-btn").click((function(e) {
      //     e.preventDefault();
      //     $(this).toggleClass("active");
      //     $(".footer-contact-form").slideToggle();
      // })),
      // $(".contact-form select, .footer-contact-form select").css("color", "#aaacda").change((function() {
      //   "null" != $("#select").val() ? $("select").css("color", "black") : $("select").css("color", "#aaacda")
      // }));
      // var e = $(".btn-go-top");
      // e.click((function() {
      //   return $("body,html").animate({
      //     scrollTop: 0
      //   }, 500, "swing", "easeInOutQuint"), !1
      // }));
      // $(window).scroll((function() {
      //   var $aeNav = $("header"),
      //   $windowScrollTop = $(window).scrollTop();
      //   $windowScrollTop >= 120 ? $aeNav.addClass("fixed") : $aeNav.removeClass("fixed");
      //   $windowScrollTop > 50 ? e.fadeIn() : e.fadeOut();
      // })).scroll();
    },function(){
    //   console.log(['ajax error', 'ajax1 :', data1, 'ajax2 :', data2, 'ajax3 :', data3]);
    });

  });


// scroll
$(window).scroll(function(){
  var $bMap = $(".bottom-map");
  var $kvani = $(".kv-1");
  $wHeight = $(window).height(),
  $windowScrollTop = $(window).scrollTop();
// console.log($windowScrollTop)
$windowScrollTop >= $wHeight/1.75 ? $bMap.addClass("bmapin") : $bMap.removeClass("bmapin");
$windowScrollTop >= 300 ? $kvani.addClass("outro") : $kvani.removeClass("outro");

var msy = $('.ms-year');
// console.log(msy.length);

for (let i = 0; i < msy.length; i++) {
  var year = 2022 - i;
  var cury = $('.ms-year[data-year=' + year + ']');
  var yearOffsetTop = cury.offset().top;

  $windowScrollTop >= yearOffsetTop - 400 ? cury.addClass("cur-year") : cury.removeClass("cur-year");
}
});

$( document ).ready(function() {
  var onloadcont = window.location.hash.replace('#','');
  $('.' + onloadcont).show();
  $('[data-aos="' + onloadcont + '"]' ).addClass('active');
  $('.' + onloadcont + '-block').load( '../load/aos-' + onloadcont + '.html' );

  $('.' + onloadcont + ' .aos-btn').click(function(){
      $('html').scrollTop( $('.' + onloadcont + '-block').offset().top );
  });
});
$('.aos-menu li a').click(function(){
  $('.aos-menu li a').removeClass('active');
  $(this).addClass('active');
  var contname = $(this).attr('data-aos');
  $('.aos-cont').hide();
  $('.' + contname).show();
});
$('.aos-menu li a[data-aos="landing"]').click(function(){
  $('.landing-block').load( "../load/aos-landing.html" );
});
$('.aos-menu li a[data-aos="speed"]').click(function(){
  $('.speed-block').load( "../load/aos-speed.html" );
});