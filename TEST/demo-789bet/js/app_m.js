$(".home-swiper-item").click(function () {
    $(".home-swiper-item").removeClass("active");
    $(this).addClass("active");
});

$(".item-news").click(function () {
    $(".img-news").removeClass("bg-item-news-active");
    $(".img-news").addClass("bg-item-news");
    $(this).find('.img-news').removeClass("bg-item-news");
    $(this).find('.img-news').addClass("bg-item-news-active");
});


$(".menu-item-bottom").click(function () {
    $(".menu-item-bottom").removeClass("active");
    $(this).addClass("active");
});

$('.select').change(function () {
    var data = $(this).val();
    $('.flag-icon.flag-icon-squared').removeClass("flag-icon-vn");
    $('.flag-icon.flag-icon-squared').removeClass("flag-icon-us");

    if (data == "vi-VN")
        $('.flag-icon.flag-icon-squared').addClass("flag-icon-vn");
    else
        $('.flag-icon.flag-icon-squared').addClass("flag-icon-us");
});

$(document).on('click', '#see-less', function () {
    $('.intro-789bet').empty();
    $('.intro-789bet').append('789BET là nhà cái có giấy phép cá cược trực tuyến hợp pháp được cấp thông qua Khu kinh tế Isle of Man &Cagayan Economic Zone and Free Port. Mục tiêu của "789BET Online Entertainment" là đảm bảo sự công bằng giữa Khách Hàng và Công Ty, đồng thời thể hiện đầy đủ các phẩm chất và năng lực khách quan của <span id="see-more">...Xem thêm</span>');
});

$(document).on('click', '#see-more', function () {
    $('.intro-789bet').empty();
    $('.intro-789bet').append('789BET là nhà cái có giấy phép cá cược trực tuyến hợp pháp được cấp thông qua Khu kinh tế Isle of Man & Cagayan Economic Zone and Free Port. Mục tiêu của "789BET Online Entertainment" là đảm bảo sự công bằng giữa Khách Hàng và Công Ty, đồng thời thể hiện đầy đủ các phẩm chất và năng lực khách quan của "789BET Online Entertainment". 789BET Online Entertainment là trang web trò chơi quy mô lớn đáng tin cậy và phổ biến nhất ở thị trường Châu Á, được chứng nhận bởi Hiệp hội Cá cược Trực tuyến Quốc tế và là một trong những nhà cái có đa dạng sản phẩm trò chơi trực tuyến được chứng nhận và cấp phép đầy đủ. 789BET là một tổ chức xuyên quốc gia với quy mô lớn và nổi tiếng khắp Châu Á - Thái Bình Dương, với kinh nghiệm và uy tín đã cung cấp dịch vụ cho hơn 10 triệu người chơi, 789BET đã chứng tỏ được sự nghiêm túc, hợp pháp và có thể tạo dựng được uy tín cao trong thời gian dài. 789BET thuộc về tập đoàn M.A.N Entertainment Group, trụ sở chính đặt tại thủ đô Manila của "Philippines" và được coi là tập đoàn lớn nhất trên thị trường cờ bạc trực tuyến châu Á, với đội ngũ nhân viên đông đảo. Khi đến với 789BET, quý khách hãy yên tâm về những lo ngại an ninh mạng bởi chúng tôi đã thành lập một trung tâm bảo mật mạng, đảm bảo tuyệt đối an ninh mạng của quý khách. Hơn nữa, 789BET đã được GEO TRUST công nhận và cấp chứng chỉ website an toàn nhất, toàn bộ thông tin của các thành viên đều được mã hóa để đảm bảo sự riêng tư tuyệt đối của người chơi với sự tin cậy cao đã được kiểm chứng.<span id="see-less"> Rút gọn</span>');
});


var swiperBanner = new Swiper(".swiperBanner", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiperGameHome = new Swiper(".swiperGameHome", {
    slidesPerView: 5,
    freeMode: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperQuickNav = new Swiper(".quicknav-swiper", {
    slidesPerView: 5,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});