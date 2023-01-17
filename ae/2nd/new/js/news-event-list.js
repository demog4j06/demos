;$(function() {
  var $listContainer = $('.brand-event-list-intro-view > .container');
  function aosReady(){
    AOS.init({
      offset: 130,
      easing: 'ease-in'
    });
  }
  function eventListTodo(){
    $('.event-item > a, .control-bk > .btn').click(function(e){
      $listContainer.load('article/' + $(this).attr("href"));
      location.hash = $(this).attr('href');
      $(window).scrollTop(0);
      e.preventDefault();
    });
    aosReady();
  }
  function eventListLoad(){
    $('.event-item').each(function(index){
      $(this).load('article/' + $(this).data('article') + '.html', setTimeout(function(){
        if(index == $('.event-item').length - 1) eventListTodo();
      },60*index));
    });
  }
  $(window).on("hashchange", function () {
    location.hash ? $listContainer.load('article/' + location.hash.substr(1),aosReady) : $listContainer.load('article/' + $listContainer.attr('id') + '.html',eventListLoad);
  }).trigger("hashchange");
});