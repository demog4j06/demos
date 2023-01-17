;$(function() {
  // var webHost = window.location.origin;
  switch($('html').attr("lang")) {
    case 'zh-Hans' :
      $('body').addClass('zh');
      var ajax1 = $.ajax({
        // url: webHost + '/new/load/header_cn.html',
        url: '../new/load/header_cn.html',
        dataType:'html'
      }).done(function(data) {
        $('.aeNav').append(data);
      }), ajax2 = $.ajax({
        url:'../new/load/footer_cn.html',
        dataType:'html'
      }).done(function(data) {
        $('.footer').append(data);
      });
      break;
    case 'th' :
      $('body').addClass('th');
      var ajax1 = $.ajax({
        url:'../new/load/header_th.html',
        dataType:'html'
      }).done(function(data) {
        $('.aeNav').append(data);
      }), ajax2 = $.ajax({
        url:'../new/load/footer_th.html',
        dataType:'html'
      }).done(function(data) {
        $('.footer').append(data);
      });
      break;
    case 'vi' :
      $('body').addClass('vn');
      var ajax1 = $.ajax({
        url:'../new/load/header_vn.html',
        dataType:'html'
      }).done(function(data) {
        $('.aeNav').append(data);
      }), ajax2 = $.ajax({
        url:'../new/load/footer_vn.html',
        dataType:'html'
      }).done(function(data) {
        $('.footer').append(data);
      });
      break;
    default :
      $('body').addClass('en');
      var ajax1 = $.ajax({
        url:'../new/load/header_en.html',
        dataType:'html'
      }).done(function(data) {
        $('.aeNav').append(data);
      }), ajax2 = $.ajax({
        url:'../new/load/footer_en.html',
        dataType:'html'
      }).done(function(data) {
        $('.footer').append(data);
      });
      break;
  }
  $.when(ajax1,ajax2).then(function(data1,data2){
    $('.lang-selector > .dropdown-menu > li').click(function(){
      // window.location = '../../' +  $(this).attr('data-lang') + '/' +  window.location.pathname.split('/')[2];
      var website = window.location.href;
      window.location = '../' +  $(this).attr('data-lang') + website.substr(website.lastIndexOf('/'));
    })
    $(".toggle-menu-btn").click((function(e) {
      e.preventDefault();
      $(".mobile-menu-wrap").addClass("active");
      $(".overlayer").addClass("active");
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
    $(".contact-form select, .footer-contact-form select").css("color", "#aaacda").change((function() {
      "null" != $("#select").val() ? $("select").css("color", "black") : $("select").css("color", "#aaacda")
    }));
    var e = $(".btn-go-top");
    e.click((function() {
      return $("body,html").animate({
        scrollTop: 0
      }, 500, "swing", "easeInOutQuint"), !1
    }));
    $(window).scroll((function() {
      var $aeNav = $(".aeNav"),
      $windowScrollTop = $(window).scrollTop();
      $windowScrollTop >= 120 ? $aeNav.addClass("fixed") : $aeNav.removeClass("fixed");
      $windowScrollTop > 50 ? e.fadeIn() : e.fadeOut();
    })).scroll();
  },function(){
    console.log(['ajax error', 'ajax1 :', data1, 'ajax2 :', data2, 'ajax3 :', data3]);
  });
});