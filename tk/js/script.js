// lang
function setLang(e) {
    var title = Object.keys(e);
    for (var i = 0; i < title.length; i++) {
        $('[text=' + title[i] + ']').html(e[title[i]]);
    };
}

$('.lang').click(function(){
    $(this).toggleClass('zh');
    console.log('OOO');
	if ( $('.lang').hasClass('zh') ) {
		setLang(i18n.zh);
	} else {
		setLang(i18n.en);
	}
})

setLang(i18n.en);
