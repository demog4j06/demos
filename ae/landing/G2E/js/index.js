//lang
;function setLang(e) {
  var title = Object.keys(e);
  for (var i = 0, max = title.length; i < max; i++) {
      $('[text=' + title[i] + ']').text(e[title[i]]);
  };
  for (var i = 0, max = $('[data-word]').length; i < max; i++) {
    $('[data-word]').eq(i).attr('data-word', $('[data-word]').eq(i).text())
  };
}

$(function () {
  $('.lang > a').click(function(){
    var webLang = $(this).attr('id');
    location.hash = webLang;
    $('html').attr('lang',webLang);
    $('body').attr('class',webLang);
    $(this).addClass('active').siblings().removeClass();
    $('#head').hasClass('menu--open') && $('#head').removeClass('menu--open');
    switch (webLang) {
      case 'zh':
        document.title = 'AE娱乐-东南亚包网、泰国包网、越南包网、彩票包网、Sexy Gaming-一站式服務';
        $('meta[name="keywords"]').attr('content',"AE集团,越南彩票,越南斗鸡,泰国彩票,娱乐城包网,东南亚百家乐,AE真人,AE彩票,电竞系統平台,棋牌包网,彩票包网,东南亚彩票,彩票API,AE Group,彩票接口,东南亚包网,印度包网,ny彩票,AE性感百家" );
        $('meta[name="description"]').attr('content',"AE集团专营东南亚包网，不仅提供越南彩票、越南斗鸡、泰国彩票、娱乐城包网、东南亚百家乐、东南亚彩票包网，更有AE性感百家。并针对全球市场研发AE彩票、电竞包网、娱乐城包网、棋牌包网、彩票API，提供多样模板、多国语系，满足您各式需求。" );
        setLang(i18n.zh);
        $('#lottery a.main-btn').attr('href', './lottery/cn/');
        break;
      case 'th':
        document.title = 'AEคาสิโนออนไลน์-แพ็คเกจในเอเซียตะวันออกเฉียงใต้ อินเตอร์เน็ตแพ็คเกจในปรประเทศไทย อินเตอร์เน็ตแพ็คเกจในประเทศเวียดนาม ลอตเตอรี่ Sexy Gaming - การให้บริการเบ็ดเสร็จ ณ จุดเดียว';
        $('meta[name="keywords"]').attr('content',"เครือAE,หวยเวียดนาม,ไก่ชนเวียดนาม,หวยไทย,คาสิโนออนไลน์,บาคาร่าเอเซียตะวันออกเฉียงใต้,AEถ่ายทอดสด,หวยAE,แพลตฟอร์มEsport,เกมส์ไพ่,ลอตเตอรี่,ลอตเตอรี่เอเซียตะวันออกเฉียงใต้,ลอตเตอรี่API,AE Group,อินเตอร์เฟซการจับสลาก,อินเตอร์เน็ตแพ็คเกจในเอเซียตะวันออกเฉียงใต้,อินเตอร์เน็ตแพ็คเกจในปรประอินเดีย,นิวยอร์กลอตโต้,AEเซ็กซี่บาคาร่า" );
        $('meta[name="description"]').attr('content',"เครือAE เชี่ยวชาญทางด้านอินเตอร์เน็ตแพ็คเกจในเอเซียตะวันออกเฉียงใต้ ไม่เพียงให้บริการลอตเตอรี่เวียตนาม ไก่ชนเวียดนาม ลอตเตอรี่ไทย คาสิโนออนไลน์ บาคาร่าเอเซียตะวันออกเฉียงใต้  และยีงมีAEเซ็กซี่บาคาร่าด้วย AEได้วิจัยAEลอตเตอรี่ Esport  คาสิโนออนไลน์ เกมส์ไพ่ ลอตเตอรี่API สำหรับตลาดที่ไร้พรมแดน จำนวนแม่แบบและภาษาที่หลากหลาย  สนองความต้องการของคุณ" );
        setLang(i18n.th);
        $('#lottery a.main-btn').attr('href', './lottery/th/');
        break;
      case 'vn':
        document.title = 'AE White Label-Southeast Asia White Label, Thailand White Label, Vietnam White';
        $('meta[name="keywords"]').attr('content',"AE Group,Vietnam Lottery,cockfighting,thailand lottery,white label,baccarat,sexy gaming,AE lottery,e-sports white label,chess white label,lottery white label,lottery,casino,southeast asia white label,live streaming,lottery API,India White Label,ny lottery,AE SEXY baccarat" );
        $('meta[name="description"]').attr('content',"AE Group, an expert in Southeast Asia White Label! Not only provides Vietnam lottery, cockfighting, Thailand lottery, white label platform, and the most popular live streaming-AE SEXY Baccarat. Also deliver AE Lottery, lottery white label, AE Chess white label and esports white label to worldwide. With various templates, supports 8 languages and currencies to meet your needs." );
        setLang(i18n.vn);
        $('#lottery a.main-btn').attr('href', './lottery/en/');
        break;
      default:
        document.title = 'AE White Label-Southeast Asia White Label, Thailand White Label, Vietnam White';
        $('meta[name="keywords"]').attr('content',"AE Group,Vietnam Lottery,cockfighting,thailand lottery,white label,baccarat,sexy gaming,AE lottery,e-sports white label,chess white label,lottery white label,lottery,casino,southeast asia white label,live streaming,lottery API,India White Label,ny lottery,AE SEXY baccarat" );
        $('meta[name="description"]').attr('content',"AE Group, an expert in Southeast Asia White Label! Not only provides Vietnam lottery, cockfighting, Thailand lottery, white label platform, and the most popular live streaming-AE SEXY Baccarat. Also deliver AE Lottery, lottery white label, AE Chess white label and esports white label to worldwide. With various templates, supports 8 languages and currencies to meet your needs." );
        setLang(i18n.en);
        $('#lottery a.main-btn').attr('href', './lottery/en/');
        break;
    }
  });

  $(window).on('hashchange',function(){
    switch(location.hash.substr(1)) {
      case 'zh' :
        $('#zh').click();
        break;
      case 'th' :
        $('#th').click();
        break;
      case 'vn' :
        $('#vn').click();
        break;
      default :
        $('#en').click();
        break;
    };
  });

  var ajax1 = $.ajax({
    url:'./load/contact.html',
    dataType:'html'
  }).done(function(data) {
    $('#contact').append(data);
  })
  var ajax2 = $.ajax({
    url:'./load/foot.html',
    dataType:'html'
  }).done(function(data) {
    $('#foot').append(data);
  })
  $.when(ajax1,ajax2).then(function(data1,data2){
    // come in, computer language. window.navigator.language ： zh-TW 繁中 、 zh-CN 簡中 、 th-TH 泰文 、 vi-VN 越南 、 en-US 英文
    switch(window.navigator.language) {
      case 'zh-TW' :
      case 'zh-CN' :
        $('#zh').click();
        break;
      case 'th-TH' :
        $('#th').click();
        break;
      case 'vi-VN' :
        $('#vn').click();
        break;
      default :
        $('#en').click();
    };
  },function(){
    console.log(['ajax error', 'ajax1 :', data1, 'ajax2 :', data2]);
  });
  $.ajax('https://ipapi.co/json').then(
    function success(response) {
      switch(response.country_name) {
        case 'Taiwan' :
        case 'China' :
          $('#zh').click();
          break;
        case 'Thailand' :
          $('#th').click();
          break;
        case 'Vietnam' :
          $('#vn').click();
          break;
        default :
          $('#en').click();
      };
    },
    function fail(data, status) {
      console.log('Request failed.  Returned status of', status);
    }
  );

  //  windowScrollFunction
  var distance = 1000,//(px)
    speed = 300,//(ms)
    minSpeed = 300,//(ms)
    maxSpeed = 600,//(ms)
    rate = speed / distance,
    $windowHeight = $(window).height(),
    $headHeight = $('#head').height(),
    $RollingUnit = $('body > section');

  $('#menu-wrap__menu-scroll > li').click(function () {
    if (!$(this).children('a').hasClass('active')) {
      var goToOffsetTop,
          $this = $(this),
          clickSceneActive = $this.index(),
          $RollingTarget = $RollingUnit.eq(clickSceneActive);
      $(window).off('scroll', windowScrollFunction);
      $('#head').removeClass('menu--open');
      $this.children('a').addClass('active').end().siblings('li').find('a').removeClass('active');
      $RollingUnit.removeClass('active').eq(clickSceneActive).addClass('active');
      if ($(window).width() >= 1000) { //分別手機、桌機的選單滾動位置，手機置頂、桌機置中
        goToOffsetTop = $RollingTarget.offset().top - $windowHeight / 2 - $headHeight / 2 + $RollingTarget.outerHeight(true) / 2
      } else {
        goToOffsetTop = $RollingTarget.offset().top - $headHeight
      }
      var bodySrcollTime = Math.abs($(window).scrollTop() - goToOffsetTop) / rate;
      $('html, body').stop(true).delay(200).animate({
        scrollTop: goToOffsetTop
      }, (bodySrcollTime < minSpeed ? minSpeed : bodySrcollTime > maxSpeed ? maxSpeed : bodySrcollTime), function () {
        $(window).on('scroll', windowScrollFunction);
      })
    }
  });
  function windowScrollFunction() {
    var WST = $(window).scrollTop(),
        scrollSceneActive = 0;
    WST > 100 ? $('#head').addClass('head--fixed') : $('#head').removeClass('head--fixed');
    $RollingUnit.each(function (index) {
      WST >= $RollingUnit.eq(index).offset().top - ($windowHeight / 2) - ($headHeight / 2) && (scrollSceneActive = index)
    });
    $('#menu-wrap__menu-scroll > li').find('a').removeClass('active').end().eq(scrollSceneActive).children('a').addClass('active');
    $RollingUnit.removeClass('active').eq(scrollSceneActive).addClass('active');
  }

  // default
  setTimeout(function () {
    $('#home-box').removeClass('first');
  }, 1000);

  //parallax
  $(window).on('scroll', windowScrollFunction).scroll().on("resize", function () {
    $windowHeight = $(window).height();
    $headHeight = $('#head').height();
    $(window).outerWidth() >= 1200 && $('#home .img-box').on('mousemove', function (e) {
      var leverage = 5,
        percentX = e.offsetX / ($(this).width() / 2) - 1,
        percentY = e.offsetY / ($(this).height() / 2) - 1;
      $('.year').css({ transform: 'translate3d(' + (percentX * leverage * 5) + 'px, ' + (percentY * leverage * -5) + 'px, 0)' });
      $('.title').css({ transform: 'translate3d(' + (percentX * leverage * -4) + 'px, ' + (percentY * leverage * 4) + 'px, 0)' });
      $('.R-girl').css({ transform: 'translate3d(' + (percentX * leverage * 6) + 'px, ' + (percentY * leverage * 3) + 'px, 0)' });
      $('.L-girl').css({ transform: 'translate3d(' + (percentX * leverage * 3) + 'px, ' + (percentY * leverage * 6) + 'px, 0)' });
    });
  }).resize();

  // header
  $('#head__m-btn').click(function () {
    $('#head').toggleClass('menu--open');
  });

  // toContact
  $('.to-contact').click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, 600);
  });

  //goToTop
  $('#goToTop').click(function () {
    $("html,body").animate({ scrollTop: 0 }, 600);
  });
  setTimeout(function () {
    $('#goToTop').click()
  }, 0);
});
