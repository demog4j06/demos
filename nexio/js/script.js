// fullpage
$(document).ready(function() {
	$("#fullpage").fullpage({
		anchors: ["home", "about", "service", "expertise", "contact"],
		menu: ".nav",
		autoScrolling: false,
		scrollingSpeed: 500,
		resize: !0,
		touchSensitivity: 7,
		normalScrollElementTouchThreshold: 3,

		afterLoad: function(anchorLink, index) {
			var loadedSection = $(this);
			if (index == 1) {
				$('header').attr('class', '');
			}
			if (index <= 2) {
				$('.scene').show();
			} else {
				$('.scene').hide().attr('style','');
			}
			if (index >= 4 || anchorLink == 'about') {
				$('header').addClass('bk');
			} else  {
				$('header').removeClass('bk');
			}
		}
	});
	$('header .logo').click(function() {
		$.fn.fullpage.moveTo(1, 0);
	});
	$('header .hmb').click(function() {
		$('header').toggleClass('mb-show');
	});
	$('.nav li a').click(function() {
		$('header').removeClass('mb-show');
	});
	// $('.btn-career').click(function() {
	// 	$('.career').addClass('show');
	// });
	$('.career-close').click(function() {
		$('.career').removeClass('show');
	});
	$('.career div, .career a').attr('style','');
});

// scroll
$(window).scroll(function() {
	var sc = $(this).scrollTop();
	var wHeight = $(window).height();
	if (sc >= wHeight) {
		$('.cb-01').css('bottom', -10 - 0.25 * (sc - wHeight));
		$('.cb-02').css('top', -10 - 0.2 * (sc - wHeight));
	}

	$('.cb-03').css('bottom', -0.1 * (sc - wHeight));

	$('.cb-a').css('top', -0.1 * (sc / 0.5));
	$('.cb-b').css('top', 200 - 0.1 * (sc / 0.9));
	$('.cb-c').css('top', 500 - 0.1 * (sc / 0.3));
	$('.cb-d').css('top', -0.05 * (sc / 0.9));
	$('.cb-e').css('bottom', - 0.1 * (sc / 2.5));

	$('.screen img:nth-of-type(1)').css('top', -0.1 * (sc / 0.9));
	$('.screen img:nth-of-type(2)').css('top', -0.1 * (sc / 0.8));
	$('.screen img:nth-of-type(4)').css('top', 80 - 0.1 * (sc / 0.7));
	$('.screen img:nth-of-type(5)').css('top', -0.1 * (sc / 0.9));

})

// lang
function setLang(e) {
    var title = Object.keys(e);
    for (var i = 0; i < title.length; i++) {
        $('[text=' + title[i] + ']').html(e[title[i]]);
    };
}

$('.lang').click(function(){
	$(this).toggleClass('zh');
	if ( $('.lang').hasClass('zh') ) {
		setLang(i18n.zh);
	} else {
		setLang(i18n.en);
	}
})

setLang(i18n.en);

// map
function initMap() {
	var nexio = {
		lat: 25.079393,
		lng: 121.573344
	};
	var image = {
		url: 'https://gioshall.github.io/nexio/img/map-marker.png',
		size: new google.maps.Size(50, 50),
		origin: new google.maps.Point(0, 0),
  		anchor: new google.maps.Point(14, 25),
		scaledSize: new google.maps.Size(35, 35)
	};

	var map = new google.maps.Map(document.getElementById('map'), {
		scaleControl: true,
		center: nexio,
		zoom: 17,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false,
		styles: [{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"visibility": "on"
			}, {
				"saturation": -100
			}, {
				"lightness": 65
			}]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"saturation": -80
			}, {
				"lightness": 50
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "all",
			"stylers": [{
				"visibility": "on"
			}, {
				"saturation": -100
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [{
				"visibility": "on"
			}, {
				"saturation": -100
			}, {
				"lightness": 40
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"saturation": 0
			}]
		}, {
			"featureType": "administrative.province",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#000000"
			}, {
				"weight": 0.29
			}, {
				"saturation": -100
			}, {
				"lightness": -13
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"hue": "#00b3ff"
			}, {
				"saturation": -21
			}, {
				"lightness": -25
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#8693a1"
			}, {
				"weight": 2.3
			}, {
				"lightness": -13
			}, {
				"gamma": 1.08
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "labels.text.fill",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#000000"
			}, {
				"weight": 0.48
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#ffffff"
			}, {
				"weight": 2.6
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#000000"
			}, {
				"lightness": 21
			}]
		}, {
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#000000"
			}, {
				"lightness": -37
			}, {
				"gamma": 0.01
			}]
		}, {
			"featureType": "administrative.locality",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#f5f0f5"
			}, {
				"weight": 4.43
			}]
		}]
	});

	var marker = new google.maps.Marker({
		map: map,
		position: nexio,
		icon: image
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

}